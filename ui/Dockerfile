FROM node:18-alpine AS base

WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY turbo.json ./
COPY .npmrc ./

# Copy all package.json files from apps and packages
COPY packages/*/package*.json ./packages/
COPY apps/*/package*.json ./apps/

# Install dependencies with legacy peer deps to avoid conflicts
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Expose ports for all micro-frontends
EXPOSE 3000 3001 3002

# Start the development server
CMD ["npm", "run", "dev"]