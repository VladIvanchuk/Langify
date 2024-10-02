# Build stage
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built React app to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration template
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Use the default command to run Nginx, which will process templates
CMD ["nginx", "-g", "daemon off;"]
