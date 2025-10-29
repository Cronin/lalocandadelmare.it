#!/bin/bash

# Universal Vercel Ignore Build Step Script
# This script prevents unnecessary builds when other standalone sites change
# It automatically detects the current site's directory and only builds when files in that directory change

echo "🔍 Checking if build is needed..."

# Get the current project directory from VERCEL_PROJECT_NAME or fallback to current directory
if [ -n "$VERCEL_PROJECT_NAME" ]; then
  SITE_DIR="standalone-sites/$VERCEL_PROJECT_NAME"
  echo "📦 Project: $VERCEL_PROJECT_NAME"
else
  # Fallback: detect from current directory
  SITE_DIR=$(pwd | sed 's|.*/standalone-sites/||' | sed 's|/.*||')
  SITE_DIR="standalone-sites/$SITE_DIR"
  echo "📦 Project: Detected from path"
fi

echo "📂 Watching directory: $SITE_DIR"

# Get the list of changed files between HEAD and previous commit
CHANGED_FILES=$(git diff --name-only HEAD^ HEAD 2>/dev/null || git diff --name-only HEAD)

if [ -z "$CHANGED_FILES" ]; then
  echo "⚠️  No changes detected (first deployment?). Proceeding with build."
  exit 1
fi

echo "📝 Changed files:"
echo "$CHANGED_FILES"

# Check if any changed files are in this site's directory
if echo "$CHANGED_FILES" | grep -q "$SITE_DIR/"; then
  echo "✅ Changes detected in $SITE_DIR. Proceeding with build."
  exit 1  # Exit 1 = proceed with build
else
  echo "⏭️  No changes in $SITE_DIR. Skipping build."
  exit 0  # Exit 0 = skip build
fi
