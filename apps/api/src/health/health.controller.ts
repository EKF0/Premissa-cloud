import { Controller, Get } from "@nestjs/common";

@Controller()
export class HealthController {
  @Get("health")
  health(): { status: "ok" } {
    return { status: "ok" };
  }

  @Get("ready")
  ready(): { status: "ready" } {
    // Extend with Firestore, Storage and Secret Manager reachability checks.
    return { status: "ready" };
  }
}
