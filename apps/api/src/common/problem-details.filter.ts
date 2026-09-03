import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import type { Response } from "express";

const BASE = "https://permissa.app/problems";

/**
 * Emits RFC 9457 Problem Details. Never include stack traces, provider payloads,
 * screenplay content, entity names or secrets.
 */
@Catch()
export class ProblemDetailsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const correlationId = String(ctx.getRequest().correlationId ?? "unknown");

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;
    const code =
      exception instanceof HttpException && status === 403
        ? "FORBIDDEN"
        : status === 401
          ? "AUTH_REQUIRED"
          : status === 412
            ? "VERSION_CONFLICT"
            : "VALIDATION_FAILED";

    response
      .status(status)
      .type("application/problem+json")
      .send({
        type: `${BASE}/${code.toLowerCase().replaceAll("_", "-")}`,
        title: code,
        status,
        detail: "The request could not be completed.",
        code,
        correlationId,
        retryable: status >= 500,
      });
  }
}
