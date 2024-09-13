#!/bin/bash

echo "Waiting for the service to start..."
sleep 10  # Wait for 10 seconds

# Proceed with the health check
HEALTH_CHECK_URL="http://localhost:80/health"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $HEALTH_CHECK_URL)

if [ "$HTTP_STATUS" -eq 200 ]; then
    echo "Service is running correctly. Health check passed."
    exit 0
else
    echo "Service is not running correctly. Health check failed with status code: $HTTP_STATUS"
    exit 1
fi
