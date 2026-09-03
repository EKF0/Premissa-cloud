# Terraform

Single production environment in `us-central1`. Structure supports adding staging
later without redesign.

```bash
terraform init
terraform plan -var-file=env/prod.tfvars
terraform apply -var-file=env/prod.tfvars
```

Managed resources: Cloud Run API service, parser job, clearance job, Cloud Tasks
queue, Firestore, private Storage buckets, Artifact Registry, Secret Manager,
service accounts and IAM bindings, log/trace exporters, retention scheduler,
backup configuration, budget alerts.

Never commit state files or secret values.
