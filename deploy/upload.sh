#!/bin/bash
# macOS/Linux → iwinv 서버 sdk 배포 스크립트 업로드
set -e

SERVER="root@115.68.230.229"

scp deploy/scripts/gen-deploy-key.sh "$SERVER:/root/gen-deploy-key-sdk.sh"
scp deploy/scripts/setup-git-deploy.sh "$SERVER:/root/setup-git-deploy-sdk.sh"
scp deploy/scripts/pull.sh "$SERVER:/root/pull-sdk.sh"
ssh "$SERVER" "chmod +x /root/gen-deploy-key-sdk.sh /root/setup-git-deploy-sdk.sh /root/pull-sdk.sh"

echo "Uploaded sdk deploy scripts to $SERVER:/root/*-sdk.sh"
