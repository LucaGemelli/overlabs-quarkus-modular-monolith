FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
COPY packages/ui/package.json ./packages/ui/
COPY packages/config-typescript/package.json ./packages/config-typescript/
COPY packages/config-tailwind/package.json ./packages/config-tailwind/
COPY packages/config-eslint/package.json ./packages/config-eslint/

RUN npm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Install Next.js globally
RUN npm install -g next

# Build UI package first
WORKDIR /app/packages/ui
RUN npm run build

# Build the application
WORKDIR /app/apps/dashboard
RUN npm install next@latest
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/dashboard/public ./apps/dashboard/public
COPY --from=builder /app/apps/dashboard/.next/standalone ./
COPY --from=builder /app/apps/dashboard/.next/static ./apps/dashboard/.next/static

USER nextjs

EXPOSE 3001

ENV PORT 3001
ENV HOSTNAME "0.0.0.0"

CMD ["node", "apps/dashboard/server.js"]