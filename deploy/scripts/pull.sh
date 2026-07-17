#!/bin/bash
# /var/www/sdk 코드만 최신으로 (일상 배포)
set -e

APP_DIR="/var/www/sdk"

cd "$APP_DIR"
git pull origin main
echo "PULL_OK $(date '+%Y-%m-%d %H:%M:%S')"
