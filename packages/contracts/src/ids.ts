import { z } from "zod"

/** UUIDv7, generated server-side. Opaque to clients. */
export const Uuid = z
	.string()
	.uuid()
	.refine((value) => value[14] === "7", { message: "identifier must be UUIDv7" })

export const OrganizationId = Uuid
export const ProjectId = Uuid
export const ScriptVersionId = Uuid
export const SceneId = Uuid
export const EntityId = Uuid
export const RunId = Uuid
export const ResearchTaskId = Uuid
export const CitationId = Uuid
export const FindingId = Uuid
export const ReviewId = Uuid
export const ReportId = Uuid
export const IdempotencyKey = z.string().min(16).max(128)
