import { Module } from "@nestjs/common";
import { HealthController } from "./health/health.controller.js";

/**
 * Feature modules are added per tranche:
 * auth, organizations, projects, uploads, scripts, entities, runs, queue,
 * research, findings, evidence, reviews, reports, usage, admin, observability.
 */
@Module({
  controllers: [HealthController],
})
export class AppModule {}
