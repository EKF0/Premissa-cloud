import { z } from "zod"
import { IsoDateTime, Versioned } from "./common.js"
import { Jurisdiction, SourceType, UploadState } from "./enums.js"
import { ProjectId, ScriptVersionId, SceneId } from "./ids.js"

export const CreateUploadRequest = z.object({
	projectId: ProjectId.optional(),
	sourceType: SourceType,
	declaredBytes: z.number().int().positive().max(20_000_000),
	declaredPageCount: z.number().int().positive().max(20).optional(),
})

export const CreateUploadResponse = z.object({
	uploadId: z.string(),
	signedUrl: z.string().url(),
	objectKey: z.string(),
	expiresAt: IsoDateTime,
	maxBytes: z.number().int().positive(),
})

export const CompleteUploadRequest = z.object({
	checksumSha256: z.string().length(64),
})

export const CompleteUploadResponse = z.object({
	uploadId: z.string(),
	state: UploadState,
})

export const CreateProjectRequest = z.object({
	title: z.string().min(1).max(200),
	jurisdiction: Jurisdiction,
	authorizedUseConfirmed: z.literal(true),
})

export const Scene = z.object({
	id: SceneId,
	scriptVersionId: ScriptVersionId,
	ordinal: z.number().int().positive(),
	heading: z.string(),
	sourceRange: z.object({ start: z.number().int(), end: z.number().int() }),
})

export const ScriptVersion = Versioned.extend({
	id: ScriptVersionId,
	projectId: ProjectId,
	sourceType: SourceType,
	checksumSha256: z.string().length(64),
	pageCount: z.number().int().positive().max(20),
	versionNumber: z.number().int().positive(),
	sceneCount: z.number().int().nonnegative(),
})
