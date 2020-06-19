

Build : Build the server and UI app : npm run build

Start the app : npm start

gcloud projects add-iam-policy-binding karthik-text-to-speech-project --member "serviceAccount:[name]@[karthik-text-to-speech-project].iam.gserviceaccount.com" --role "roles/owner"karthik-text-to-speech-project

(gcloud.projects.add-iam-policy-binding) INVALID_ARGUMENT: The role name must be in the form "roles/{role}", "organizations/{org
anization_id}/roles/{role}", or "projects/{project_id}/roles/{role}"

gcloud projects add-iam-policy-binding karthik-text-to-speech-project --member "serviceAccount:[name]@[karthik-text-to-speech-project].iam.gserviceaccount.com" --role "projects/{karthik-text-to-speech-project}/roles/owner"


ERROR: (gcloud.projects.add-iam-policy-binding) INVALID_ARGUMENT: Request contains an invalid argument.
- '@type': type.googleapis.com/google.cloudresourcemanager.v1.ProjectIamPolicyError
  member: serviceAccount:[name]@[karthik-text-to-speech-project].iam.gserviceaccount.com