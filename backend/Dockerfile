# Multi-stage build for Node.js backend
# Stage 1: Build dependencies
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for potential build steps)
RUN npm ci --only=production && \
    npm cache clean --force

# Stage 2: Production image
FROM node:20-alpine

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Copy dependencies from builder stage
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules

# Copy application source code
COPY --chown=nodejs:nodejs . .

# Set environment to production
ENV NODE_ENV=production

# Switch to non-root user
USER nodejs

# Expose port (default 5000, can be overridden)
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
