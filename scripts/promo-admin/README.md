# Promo-code admin — code.allyonoreward.com

A dependency-free Node server (`server.cjs`, Node 18+) for the daily
Morning / Afternoon / Evening promo codes. Single admin, no sign-up.

## How it works

The site's promo pages (`/`, `/promo-codes`, `/promo-codes/<game>`) read the
plain-text promo file on **every request** (`src/lib/dailyCode.ts`), so a save is
live immediately — no rebuild. The file lives **outside the git checkout**
(`/www/wwwroot/allyonoreward-admin-data/promo-code.txt`), so a deploy
(`git reset --hard`) can never overwrite today's codes. The first time the admin
runs it seeds that file from the repo's `promo-code.txt`.

- Domain-style text (e.g. `loverummy8.com`) and free text are valid codes. They are
  stored and shown as **plain text**, never as links. Only `|`-free control-character
  checks and a 40-character limit apply.
- A code present = status "Verified"; blank = "Not Released".
- Each game has up to three codes (AM / PM / Eve tabs).

## One-time setup (on the VPS)

The site runs in `/www/wwwroot/allyonoreward-app` (PM2 app `allyoncreward`).

1. **DNS (Cloudflare):** A record `code` -> same IP as allyonoreward.com.
2. **Deploy the code** (your usual deploy):
   ```
   cd /www/wwwroot/allyonoreward-app
   ```
   ```
   git fetch origin && git reset --hard origin/main && rm -rf .next && npm ci && npm run build && pm2 restart allyoncreward --update-env
   ```
3. **Settings file OUTSIDE the repo** (replace the password, keep the single quotes):
   ```
   node -e "const c=require('crypto');const s=c.randomBytes(16);console.log('ADMIN_PASSWORD_HASH=scrypt:'+s.toString('hex')+':'+c.scryptSync(process.argv[1],s,64).toString('hex'));console.log('ADMIN_SESSION_SECRET='+c.randomBytes(32).toString('base64url'))" 'your-real-password' > /tmp/new.env
   (echo "ADMIN_USERNAME=Admin"; echo "PORT=3160"; cat /tmp/new.env) > /www/wwwroot/allyonoreward-admin.env
   rm /tmp/new.env; chmod 600 /www/wwwroot/allyonoreward-admin.env; history -c
   ```
4. **Start it** (from the site folder):
   ```
   ss -tlnp | grep 3160          # should print nothing (port free)
   pm2 start scripts/promo-admin/server.cjs --name allyonoreward-admin
   pm2 save
   sleep 2; curl -s http://127.0.0.1:3160/healthz; echo     # -> ok
   ```
5. **aaPanel:** add site `code.allyonoreward.com` (static) -> Reverse proxy: dir `/`,
   target `http://127.0.0.1:3160`, Sent Domain `$host`, **cache OFF**; then SSL
   (Let's Encrypt) + Force HTTPS.

## Daily use

Log in at https://code.allyonoreward.com -> type codes into Morning / Afternoon /
Evening -> **Save changes**. **Start new day** clears everything. A warning appears
if the saved codes are from an earlier day.

## Notes

- Platforms come from `src/data/games.ts` (58 games).
- Each save backs up the previous file to `/www/wwwroot/allyonoreward-admin-data/backups/` (last 60 kept).
- 5 failed logins from one IP locks that IP out for 15 minutes; sessions last 8 h.
