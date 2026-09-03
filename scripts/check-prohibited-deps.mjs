#!/usr/bin/env node
/**
 * Fails the build if a prohibited AI vendor dependency appears anywhere in the
 * workspace. Competition rules restrict the runtime to Google AI plus the
 * required partner services.
 */
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"

const PROHIBITED = [
	"openai",
	"@anthropic-ai/sdk",
	"anthropic",
	"@aws-sdk/client-bedrock",
	"@azure/openai",
	"langchain-openai",
	"cohere-ai",
]

const manifests = []

const walk = (dir) => {
	for (const entry of readdirSync(dir)) {
		if (entry === "node_modules" || entry === ".git") continue
		const full = join(dir, entry)
		if (statSync(full).isDirectory()) walk(full)
		else if (entry === "package.json") manifests.push(full)
	}
}

walk(process.cwd())

let failed = false

for (const manifest of manifests) {
	const pkg = JSON.parse(readFileSync(manifest, "utf8"))
	const deps = {
		...(pkg.dependencies ?? {}),
		...(pkg.devDependencies ?? {}),
		...(pkg.peerDependencies ?? {}),
	}
	for (const name of Object.keys(deps)) {
		if (PROHIBITED.some((bad) => name === bad || name.startsWith(`${bad}/`))) {
			console.error(`prohibited dependency "${name}" in ${manifest}`)
			failed = true
		}
	}
}

if (failed) {
	console.error("Prohibited AI vendor dependencies detected.")
	process.exit(1)
}

console.log(`dependency policy: clean (${manifests.length} manifests)`)
