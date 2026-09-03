# Least privilege. No Owner/Editor bindings anywhere in this project.

resource "google_storage_bucket_iam_member" "api_uploads_admin" {
  bucket = google_storage_bucket.uploads.name
  role   = "roles/storage.objectAdmin"
  member = "serviceAccount:${google_service_account.api.email}"
}

resource "google_storage_bucket_iam_member" "parser_uploads_rw" {
  bucket = google_storage_bucket.uploads.name
  role   = "roles/storage.objectUser"
  member = "serviceAccount:${google_service_account.parser.email}"
}

resource "google_storage_bucket_iam_member" "clearance_reports_rw" {
  bucket = google_storage_bucket.reports.name
  role   = "roles/storage.objectUser"
  member = "serviceAccount:${google_service_account.clearance.email}"
}

resource "google_project_iam_member" "api_firestore" {
  project = var.project_id
  role    = "roles/datastore.user"
  member  = "serviceAccount:${google_service_account.api.email}"
}

resource "google_project_iam_member" "clearance_firestore" {
  project = var.project_id
  role    = "roles/datastore.user"
  member  = "serviceAccount:${google_service_account.clearance.email}"
}

resource "google_project_iam_member" "clearance_vertex" {
  project = var.project_id
  role    = "roles/aiplatform.user"
  member  = "serviceAccount:${google_service_account.clearance.email}"
}

# The parser holds no provider credentials and no Vertex AI access by design.
