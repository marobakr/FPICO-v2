FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy the dist folder (built application)
COPY dist/ ./dist/

# Expose the port the app runs on
EXPOSE 4000

# Start the application
CMD ["node", "dist/fpico-latest/server/server.mjs"]
