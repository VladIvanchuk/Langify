# Build stage
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:1.25.0-alpine

# Copy built React app to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration template
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template

# Expose port (optional, for documentation purposes)
EXPOSE 80

# Set environment variable for PORT (default to 80 if not set)
ENV PORT 80

# Command to process the template and start Nginx
CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
