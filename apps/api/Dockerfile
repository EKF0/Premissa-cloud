# syntax=docker/dockerfile:1
FROM node:20-slim AS build
WORKDIR /app
RUN corepack enable
COPY pnpm-workspace.yaml package.json turbo.json tsconfig.base.json ./
COPY packages ./packages
COPY apps/api ./apps/api
RUN pnpm install --frozen-lockfile && pnpm --filter @permissa/api build

FROM node:20-slim
ENV NODE_ENV=production
WORKDIR /app
RUN useradd --uid 10001 --create-home permissa
COPY --from=build --chown=permissa:permissa /app /app
USER permissa
EXPOSE 8080
CMD ["node", "apps/api/dist/main.js"]
