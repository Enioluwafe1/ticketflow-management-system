#!/usr/bin/env bash
# Build script for Render deployment

set -o errexit  # Exit on error

echo "Installing Composer dependencies..."
composer install --no-dev --optimize-autoloader --no-interaction

echo "Checking PHP version..."
php -v

echo "Verifying Twig installation..."
php -r "require 'vendor/autoload.php'; echo 'Twig loaded successfully';"

echo "Build completed successfully!"