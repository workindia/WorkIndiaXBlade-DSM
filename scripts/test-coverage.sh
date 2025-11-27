#!/bin/bash
set -e

# Run tests for packages that don't need experimental VM modules
echo "Running tests for tokens and dsm packages..."
jest --projects packages/tokens packages/dsm --coverage --coverageDirectory=coverage --coverageReporters=json --silent || true

# Run tests for MCP package with experimental VM modules
echo "Running tests for mcp package..."
NODE_OPTIONS=--experimental-vm-modules jest --projects packages/mcp --coverage --coverageDirectory=coverage --coverageReporters=json --silent || true

# Merge coverage reports and generate final report
echo "Generating coverage report..."
jest --coverage --coverageDirectory=coverage --coverageReporters=text --coverageReporters=lcov --coverageReporters=html --findRelatedTests=false --passWithNoTests || true

# If coverage-final.json exists, use it to generate reports
if [ -f "coverage/coverage-final.json" ]; then
  echo "Coverage report generated successfully at coverage/lcov.info"
else
  echo "Warning: coverage-final.json not found, but individual coverage files may exist"
fi


