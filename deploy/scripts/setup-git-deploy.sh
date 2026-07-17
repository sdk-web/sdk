#!/bin/bash
set -e

KEY="/root/.ssh/github_sdk_web_sdk"
PUB="${KEY}.pub"
CONFIG="/root/.ssh/config"
APP_DIR="/var/www/sdk"

mkdir -p /root/.ssh
chmod 700 /root/.ssh

if [ ! -f "$KEY" ]; then
  ssh-keygen -t ed25519 -f "$KEY" -N "" -C "iwinv-sdk-deploy"
fi

if ! grep -q "Host github-sdk-web-sdk" "$CONFIG" 2>/dev/null; then
  cat >> "$CONFIG" << 'EOF'

Host github-sdk-web-sdk
    HostName github.com
    User git
    IdentityFile /root/.ssh/github_sdk_web_sdk
    IdentitiesOnly yes
EOF
  chmod 600 "$CONFIG"
fi

cd "$APP_DIR"
git config --global --add safe.directory "$APP_DIR"

if [ ! -d .git ]; then
  git init
fi

git remote remove origin 2>/dev/null || true
git remote add origin git@github-sdk-web-sdk:sdk-web/sdk.git

git fetch origin main
git reset --hard origin/main
git branch -M main

chown -R root:root "$APP_DIR"
echo "GIT_DEPLOY_OK"
echo "PUBLIC_KEY:"
cat "$PUB"
