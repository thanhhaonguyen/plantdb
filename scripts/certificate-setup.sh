#!/bin/bash

# PlantDB Certificate Setup Script
# Description: Generate SSL certificates using Let's Encrypt and Certbot

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "=========================================="
echo "   PlantDB Certificate Setup"
echo "=========================================="
echo ""

# Check if Docker is installed
echo -n "Checking Docker installation... "
if ! command -v docker &> /dev/null; then
    echo -e "${RED}✗${NC}"
    echo -e "${RED}Error: Docker is not installed!${NC}"
    echo "Please install Docker first: https://docs.docker.com/get-docker/"
    exit 1
fi
echo -e "${GREEN}✓${NC}"

# Check if Docker is running
echo -n "Checking Docker daemon... "
if ! docker info &> /dev/null; then
    echo -e "${RED}✗${NC}"
    echo -e "${RED}Error: Docker daemon is not running!${NC}"
    echo "Please start Docker and try again."
    exit 1
fi
echo -e "${GREEN}✓${NC}"

# Check if Docker Compose is available
echo -n "Checking Docker Compose... "
if ! docker compose version &> /dev/null; then
    echo -e "${RED}✗${NC}"
    echo -e "${RED}Error: Docker Compose is not available!${NC}"
    echo "Please install Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi
echo -e "${GREEN}✓${NC}"

# Get the script directory and navigate to project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

echo ""
echo "Navigating to project directory..."
cd "$PROJECT_DIR"
echo "Current directory: $(pwd)"

# Check if docker-compose.yml exists
if [ ! -f "docker-compose.yml" ]; then
    echo -e "${RED}Error: docker-compose.yml not found in project directory!${NC}"
    exit 1
fi

echo ""
echo "=========================================="
echo "   Certificate Configuration"
echo "=========================================="

# Set up environment variables
export PRIMARY_DOMAIN_NAME=plantdb.lab.io.vn
export USER=pod

echo "Domain: ${PRIMARY_DOMAIN_NAME}"
echo "User: ${USER}"
echo ""

# Create necessary directories for Let's Encrypt and Certbot
echo "Creating necessary directories..."
sudo mkdir -p /etc/letsencrypt/live/
sudo mkdir -p /etc/letsencrypt/live/${PRIMARY_DOMAIN_NAME}
sudo mkdir -p /var/www/certbot
sudo chmod 777 /etc/letsencrypt/live/
sudo chmod 777 /etc/letsencrypt/live/${PRIMARY_DOMAIN_NAME}
sudo chmod 777 /var/www/certbot
sudo chown -R ${USER}: /var/www/certbot
sudo chown -R ${USER}: /etc/letsencrypt
sudo chown -R ${USER}: /etc/letsencrypt/live
sudo chown -R ${USER}: /etc/letsencrypt/live/${PRIMARY_DOMAIN_NAME}
echo -e "${GREEN}✓ Directories created${NC}"
echo ""

# Start the Certbot initialization to generate SSL certificates
echo "=========================================="
echo "   Generating SSL Certificates"
echo "=========================================="
echo ""

echo "Cleaning up any existing Certbot containers..."
docker compose --profile certbot-init down
echo -e "${GREEN}✓ Cleanup completed${NC}"
echo ""

echo "Starting Certbot certificate generation..."
docker compose --profile certbot-init up -d

echo "Waiting for Certbot certificate generation to complete..."
docker wait certbot-init

echo "Stopping Certbot initialization container..."
docker compose --profile certbot-init down
echo -e "${GREEN}✓ Certbot setup completed${NC}"
echo ""

# Verify the certificates
echo "=========================================="
echo "   Verifying Certificates"
echo "=========================================="
if [ -f /etc/letsencrypt/live/${PRIMARY_DOMAIN_NAME}/fullchain.pem ] && [ -f /etc/letsencrypt/live/${PRIMARY_DOMAIN_NAME}/privkey.pem ]; then
    echo -e "${GREEN}✓ Certificates generated successfully!${NC}"
    echo ""
    echo "Certificate files:"
    ls -l /etc/letsencrypt/live/${PRIMARY_DOMAIN_NAME}/
    echo ""
    echo "=========================================="
    echo -e "${GREEN}Certificate setup completed!${NC}"
    echo "=========================================="
else
    echo -e "${RED}✗ Certificate generation failed!${NC}"
    echo "Please check the logs for details:"
    echo "  docker compose logs certbot-init"
    echo "=========================================="
    exit 1
fi