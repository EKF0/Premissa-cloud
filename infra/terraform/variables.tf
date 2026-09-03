variable "project_id" {
  type        = string
  description = "Google Cloud project hosting PERMISSA."
}

variable "region" {
  type        = string
  default     = "us-central1"
  description = "Primary region for Cloud Run, Firestore and Storage."
}

variable "api_image" {
  type        = string
  description = "Artifact Registry image for the API service."
}

variable "worker_image" {
  type        = string
  description = "Artifact Registry image for parser and clearance jobs."
}

variable "web_origins" {
  type        = list(string)
  description = "Allowed browser origins for signed uploads and CORS."
}

variable "run_cost_cap_usd" {
  type        = number
  default     = 1.0
  description = "Default estimated Google cost ceiling per clearance run."
}

variable "budget_amount_usd" {
  type        = number
  default     = 100
  description = "Total Google Cloud credit governed by budget alerts."
}
