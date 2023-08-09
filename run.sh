#!/bin/bash

# Check if the filename parameter is provided
if [ -z "$1" ]; then
  echo "Usage: ./run.sh <filename>"
  exit 1
fi

# Run dev script
npm run dev
