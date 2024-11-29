#!/usr/bin/env bash

if [ "${SKIP_NESTED_PACKAGE_LOCK}" = "true" ]; then
  exit 0
fi

ignore_patterns=("*.sln")

# Find all subdirectories containing package.json, excluding "node_modules"
find . -type f -name "package.json" -not -path "*/node_modules/*" | while read -r package_json; do
  # Get the directory containing the package.json file
  dir=$(dirname "$package_json")

  skip=false
  for pattern in "${ignore_patterns[@]}"; do
    if find "$dir" -maxdepth 1 -type f -name "$pattern" | grep -q "."; then
      skip=true
      break
    fi
  done

  # If skip is true, continue to the next directory
  if [ "$skip" = true ]; then
    continue
  fi

  (cd "$dir" && npm i --package-lock-only --workspaces false) &
done