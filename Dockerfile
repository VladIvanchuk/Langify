# Build stage
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:1.25.0-alpine

# Set working directory
WORKDIR /app

# Copy built React app to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration template
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port (optional)
EXPOSE 80

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]
