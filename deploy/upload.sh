#!/bin/bash
# macOS/Linux → iwinv 서버 sdk 배포 스크립트 업로드
set -e

SERVER="root@115.68.230.229"

scp deploy/scripts/*.sh "$SERVER:/root/"

echo "Uploaded sdk deploy scripts to $SERVER:/root/"
