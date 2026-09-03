export type ExecutionLease = {
  activeRunId: string | null;
  leaseOwner: string | null;
  leaseExpiresAt: string | null;
  leaseVersion: number;
};

/**
 * Single global lease enforcing MAX_CONCURRENT_RUNS=1.
 * Must be claimed inside a Firestore transaction; duplicate Cloud Tasks
 * deliveries are expected and must be idempotent.
 */
export const acquireLease = async (): Promise<never> => {
  throw new Error("not implemented: tranche 3");
};
