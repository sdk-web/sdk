#!/bin/bash
set -e

KEY="/root/.ssh/github_sdk_web_sdk"
mkdir -p /root/.ssh
chmod 700 /root/.ssh

if [ ! -f "$KEY" ]; then
  ssh-keygen -t ed25519 -f "$KEY" -N "" -C "iwinv-sdk-deploy"
fi

echo "PUBLIC_KEY:"
cat "${KEY}.pub"
