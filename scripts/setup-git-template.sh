#!/bin/bash

# Setup git commit message template
# This script configures git to use the commit message template

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
TEMPLATE_PATH="$REPO_ROOT/.gitmessage"

if [ -f "$TEMPLATE_PATH" ]; then
    # Only set if not already configured or if configured differently
    CURRENT_TEMPLATE=$(git config commit.template 2>/dev/null || echo "")
    if [ "$CURRENT_TEMPLATE" != "$TEMPLATE_PATH" ]; then
        git config commit.template "$TEMPLATE_PATH"
        echo "✅ Git commit template configured successfully!"
        echo "   Template location: $TEMPLATE_PATH"
    fi
else
    echo "⚠️  Warning: Commit template not found at $TEMPLATE_PATH"
    exit 0  # Don't fail npm install if template is missing
fi

