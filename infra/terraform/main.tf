terraform {
  required_version = ">= 1.9.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Least-privilege runtime identities. Bindings are defined in iam.tf.
resource "google_service_account" "api" {
  account_id   = "permissa-api"
  display_name = "PERMISSA API runtime"
}

resource "google_service_account" "parser" {
  account_id   = "permissa-parser"
  display_name = "PERMISSA untrusted file parser job"
}

resource "google_service_account" "clearance" {
  account_id   = "permissa-clearance"
  display_name = "PERMISSA clearance job"
}

resource "google_service_account" "retention" {
  account_id   = "permissa-retention"
  display_name = "PERMISSA retention and deletion worker"
}

resource "google_service_account" "backup" {
  account_id   = "permissa-backup"
  display_name = "PERMISSA backup operator"
}

resource "google_storage_bucket" "uploads" {
  name                        = "${var.project_id}-permissa-uploads"
  location                    = var.region
  uniform_bucket_level_access = true
  public_access_prevention    = "enforced"
  force_destroy               = false

  cors {
    origin          = var.web_origins
    method          = ["PUT", "OPTIONS"]
    response_header = ["Content-Type", "x-goog-content-length-range"]
    max_age_seconds = 300
  }

  lifecycle_rule {
    condition { age = 1 }
    action { type = "AbortIncompleteMultipartUpload" }
  }
}

resource "google_storage_bucket" "reports" {
  name                        = "${var.project_id}-permissa-reports"
  location                    = var.region
  uniform_bucket_level_access = true
  public_access_prevention    = "enforced"
  force_destroy               = false
}

resource "google_cloud_tasks_queue" "runs" {
  name     = "permissa-run-admission"
  location = var.region

  rate_limits {
    max_dispatches_per_second = 1
    max_concurrent_dispatches = 1
  }

  retry_config {
    max_attempts       = 5
    min_backoff        = "5s"
    max_backoff        = "120s"
    max_doublings      = 3
  }
}

resource "google_billing_budget" "credit" {
  count = 0 # enable once the billing account id is supplied

  billing_account = ""
  display_name    = "PERMISSA Google credit"

  amount {
    specified_amount {
      currency_code = "USD"
      units         = tostring(var.budget_amount_usd)
    }
  }

  threshold_rules { threshold_percent = 0.5 }
  threshold_rules { threshold_percent = 0.75 }
  threshold_rules { threshold_percent = 0.9 }
}
