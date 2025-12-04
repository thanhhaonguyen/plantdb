#!/bin/bash

# PlantDB System Setup Script
# Description: Check Docker availability and start system containers

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "=========================================="
echo "   PlantDB System Setup"
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
echo "Starting PlantDB system containers..."
echo "=========================================="

# Start containers with system profile
docker compose --profile system up -d

echo ""
echo "=========================================="
echo -e "${GREEN}✓ System containers started successfully!${NC}"
echo ""
echo "Services:"
echo "  • MySQL Database    : localhost:3306"
echo "  • Backend API       : http://localhost:5000"
echo "  • Frontend Web      : http://localhost:3030"
echo "  • MySQL Workbench   : http://localhost:3301"
echo ""
echo "To view logs: docker compose logs -f"
echo "To stop:      docker compose --profile system down"
echo "=========================================="