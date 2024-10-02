#!/bin/sh

# Check if PORT is set
if [ -z "$PORT" ]; then
  echo "Error: PORT environment variable is not set."
  exit 1
fi

echo "Using PORT: $PORT"

# Substitute environment variables in the Nginx config template
envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start Nginx in the foreground
exec nginx -g 'daemon off;'
