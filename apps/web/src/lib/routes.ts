export const routes = {
  signIn: "/sign-in",
  dashboard: "/app",
  newProject: "/app/projects/new",
  project: (projectId: string) => `/app/projects/${projectId}`,
  entities: (projectId: string, versionId: string) =>
    `/app/projects/${projectId}/scripts/${versionId}/entities`,
  run: (projectId: string, runId: string) =>
    `/app/projects/${projectId}/runs/${runId}`,
  finding: (projectId: string, runId: string, entityId: string) =>
    `/app/projects/${projectId}/runs/${runId}/entities/${entityId}`,
  review: (projectId: string) => `/app/projects/${projectId}/review`,
  report: (projectId: string, reportId: string) =>
    `/app/projects/${projectId}/reports/${reportId}`,
  settings: "/app/settings",
  adminBudgets: "/app/admin/budget-requests",
} as const;
