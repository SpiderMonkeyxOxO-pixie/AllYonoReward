#!/bin/bash
# Daily rebuild for the date-gated 14-day content series (18-31 Oct 2026).
#
# Posts in src/data/blog/posts.ts go live when their datePublished date (IST)
# arrives (src/lib/publish.ts isPublished()), but the site is static, so a
# rebuild is what actually publishes them. Cron runs this once a day; it is
# safe to run by hand too:
#
#   bash scripts/scheduled-publish.sh
#
# Safety: the previous build is kept as .next.prev and restored if the new
# build fails, so a bad build can never leave the site without pages.
set -uo pipefail

cd "$(dirname "$0")/.."

# cron has a minimal PATH: add the usual Node/PM2 locations (incl. aaPanel).
export PATH="$PATH:/usr/local/bin:/usr/bin:/www/server/nodejs/$(ls /www/server/nodejs 2>/dev/null | tail -1)/bin"

LOG="${LOG:-$HOME/allyoncreward-publish.log}"
exec >>"$LOG" 2>&1
echo "=== $(date -u '+%Y-%m-%d %H:%M:%S UTC') | IST date $(TZ=Asia/Kolkata date +%F) ==="

# One run at a time.
exec 9>/tmp/allyoncreward-publish.lock
flock -n 9 || { echo "Another run is in progress, exiting."; exit 0; }

rm -rf .next.prev
[ -d .next ] && mv .next .next.prev

if npx next build --webpack; then
  pm2 restart allyoncreward && echo "OK: rebuilt and restarted." && rm -rf .next.prev
else
  echo "BUILD FAILED: restoring previous build."
  rm -rf .next
  [ -d .next.prev ] && mv .next.prev .next
  exit 1
fi
