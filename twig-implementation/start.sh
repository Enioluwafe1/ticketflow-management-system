#!/usr/bin/env bash
# Start script for Render deployment

set -o errexit

echo "Starting PHP server on port $PORT..."
cd public
php -S 0.0.0.0:$PORT 