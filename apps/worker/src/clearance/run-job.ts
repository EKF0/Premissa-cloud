/**
 * Clearance job entrypoint. One execution handles one run attempt.
 *
 * Contract:
 * - Acquire the run only when holding a valid Firestore execution lease.
 * - Grafana MCP preflight before any billable work.
 * - Two concurrent specialist tasks; adaptive 1-3 Parallel calls per entity.
 * - Usage ledger written after every provider call.
 * - Workflow checkpoint written after every completed entity.
 * - On pause/failure/timeout: checkpoint, release lease, exit non-fatally.
 */
export const runClearanceJob = async (): Promise<void> => {
  throw new Error("not implemented: tranche 3");
};

if (process.env.PERMISSA_JOB === "clearance") {
  void runClearanceJob();
}
