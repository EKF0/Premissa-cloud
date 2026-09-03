import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.setGlobalPrefix("v1");
  app.enableShutdownHooks();
  await app.listen(Number(process.env.PORT ?? 8080), "0.0.0.0");
};

void bootstrap();
