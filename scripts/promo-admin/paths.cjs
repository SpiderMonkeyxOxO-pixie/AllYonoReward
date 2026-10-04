"use strict";
/**
 * Shared config for the promo admin. Settings live in an env file OUTSIDE the git
 * checkout (default /www/wwwroot/allyonoreward-admin.env, next to the site folder).
 * The site (src/lib/dailyCode.ts) reads the same promo file on every request.
 */
const fs = require("node:fs");
const path = require("node:path");

const SITE_ROOT = path.resolve(process.env.SITE_ROOT || path.join(__dirname, "..", ".."));

function loadEnvFile(file) {
  let raw;
  try {
    raw = fs.readFileSync(file, "utf8");
  } catch {
    return;
  }
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2];
  }
}
loadEnvFile(process.env.ENV_FILE || path.resolve(SITE_ROOT, "..", "allyonoreward-admin.env"));

module.exports = {
  SITE_ROOT,
  // Must match getPromoFilePath() in src/lib/dailyCode.ts.
  MASTER_FILE: path.resolve(
    process.env.PROMO_FILE || path.join(SITE_ROOT, "..", "allyonoreward-admin-data", "promo-code.txt"),
  ),
  REPO_FILE: path.join(SITE_ROOT, "promo-code.txt"),
  BACKUP_DIR: path.resolve(
    process.env.BACKUP_DIR || path.join(SITE_ROOT, "..", "allyonoreward-admin-data", "backups"),
  ),
};
