/**
 * Low-privilege parser job. Handles untrusted PDF/FDX only.
 *
 * Constraints:
 * - Reads exactly one assigned quarantine object.
 * - No provider secrets, no outbound network by default.
 * - XML external entities and DTD processing disabled.
 * - Enforces size and page limits before deep parsing.
 * - Writes schema-validated normalized output plus bounded status metadata.
 */
export const runParserJob = async (): Promise<void> => {
  throw new Error("not implemented: tranche 2");
};

if (process.env.PERMISSA_JOB === "parser") {
  void runParserJob();
}
