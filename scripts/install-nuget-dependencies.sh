#!/usr/bin/env bash

echo "\\n [+] Installing Nuget Packages"

if [ "${SKIP_NUGET}" = "true" ]; then
  exit 0
fi

find . -type f -name "*.sln" | while read -r sln_file; do
  # Get the directory containing the package.json file
  dir=$(dirname "$sln_file")

  (cd "$dir" && dotnet restore)
done