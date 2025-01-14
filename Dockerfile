FROM node:20-slim as builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim as runner

WORKDIR /app

# Install serve to run the application
RUN npm install -g serve

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Expose port 8123
EXPOSE 8123

# Start the application with single-page application support
CMD ["serve", "-s", "dist", "-l", "8123", "--cors", "--no-clipboard", "--no-request-logging"] 
