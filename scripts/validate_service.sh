#!/bin/bash
# scripts/validate_service.sh

# Ensure this is the correct URL or endpoint your application should serve
URL="http://localhost"

# Check if the service is running and returning a 200 OK status
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ "$HTTP_STATUS" -ne 200 ]; then
  echo "Service is not running correctly. Health check failed with status code: $HTTP_STATUS"
  exit 1
fi

echo "Service is running correctly."
exit 0
