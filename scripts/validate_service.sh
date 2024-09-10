#!/bin/bash

# Define the URL for the health check
HEALTH_CHECK_URL="http://localhost:80/health"

echo "Starting validation of the service..."

# Send a request to the health check URL and capture the HTTP status code
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $HEALTH_CHECK_URL)

# Check if the status code is 200 (OK)
if [ "$HTTP_STATUS" -eq 200 ]; then
    echo "Service is running correctly. Health check passed."
    exit 0
else
    echo "Service is not running correctly. Health check failed with status code: $HTTP_STATUS"
    exit 1
fi
