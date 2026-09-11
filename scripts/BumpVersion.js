#!/usr/bin/env node
/**
 * BumpVersion.js
 *
 * Reads the last git commit message (or COMMIT_MSG env var) and bumps the
 * VERSION file according to the nature of the change:
 *   - "feat!"  / "BREAKING CHANGE"  → major bump  (x.0.0)
 *   - "feat"                         → minor bump  (0.x.0)
 *   - anything else                  → patch bump  (0.0.x)
 *
 * Follows AGENTS.md §20 — non-blocking. If anything fails, logs a warning
 * and exits 0 so it never blocks a commit.
 *
 * Usage:
 *   node scripts/BumpVersion.js [--commit-msg "feat: add something"]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const VERSION_FILE = path.join(ROOT, 'VERSION');

/**
 * Reads the current semantic version from the VERSION file.
 * @returns {{ major: number, minor: number, patch: number, raw: string }}
 */
function readCurrentVersion() {
  if (!fs.existsSync(VERSION_FILE)) {
    return { major: 0, minor: 1, patch: 0, raw: '0.1.0' };
  }
  const raw = fs.readFileSync(VERSION_FILE, 'utf8').trim();
  const parts = raw.split('.').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    console.warn(`[BumpVersion] VERSION file contains invalid semver "${raw}". Defaulting to 0.1.0`);
    return { major: 0, minor: 1, patch: 0, raw: '0.1.0' };
  }
  return { major: parts[0], minor: parts[1], patch: parts[2], raw };
}

/**
 * Resolves the commit message to classify the bump type.
 * Priority: --commit-msg CLI arg → COMMIT_MSG env var → last git commit.
 * @returns {string}
 */
function resolveCommitMessage() {
  // CLI flag: node BumpVersion.js --commit-msg "feat: ..."
  const flagIdx = process.argv.indexOf('--commit-msg');
  if (flagIdx !== -1 && process.argv[flagIdx + 1]) {
    return process.argv[flagIdx + 1];
  }

  if (process.env.COMMIT_MSG) {
    return process.env.COMMIT_MSG;
  }

  // Fall back to last git commit message
  try {
    return execSync('git log -1 --pretty=%s', { cwd: ROOT, stdio: ['pipe', 'pipe', 'pipe'] })
      .toString()
      .trim();
  } catch {
    return '';
  }
}

/**
 * Determines whether the bump should be major, minor, or patch.
 * @param {string} message
 * @returns {'major' | 'minor' | 'patch'}
 */
function classifyBump(message) {
  if (!message) return 'patch';

  // Conventional Commits breaking change indicators
  if (
    message.includes('BREAKING CHANGE') ||
    /^[a-z]+(\([^)]*\))?!:/.test(message) // feat!: or fix!: etc.
  ) {
    return 'major';
  }

  if (/^feat(\([^)]*\))?:/.test(message)) {
    return 'minor';
  }

  return 'patch';
}

/**
 * Applies the given bump type to the version object.
 * @param {{ major: number, minor: number, patch: number }} version
 * @param {'major' | 'minor' | 'patch'} type
 * @returns {string} New semver string
 */
function applyBump(version, type) {
  let { major, minor, patch } = version;
  if (type === 'major') {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (type === 'minor') {
    minor += 1;
    patch = 0;
  } else {
    patch += 1;
  }
  return `${major}.${minor}.${patch}`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

try {
  const current = readCurrentVersion();
  const commitMsg = resolveCommitMessage();
  const bumpType = classifyBump(commitMsg);
  const nextVersion = applyBump(current, bumpType);

  fs.writeFileSync(VERSION_FILE, nextVersion + '\n', 'utf8');

  console.log(
    `[BumpVersion] ${current.raw} → ${nextVersion} (${bumpType} bump)` +
      (commitMsg ? `\n  commit: "${commitMsg}"` : ''),
  );

  // Also update package.json at root if it has a "version" field
  const pkgPath = path.join(ROOT, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    if (pkg.version !== undefined) {
      pkg.version = nextVersion;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
      console.log(`[BumpVersion] Updated package.json version to ${nextVersion}`);
    }
  }
} catch (err) {
  // Non-blocking: warn but do not exit with non-zero
  console.warn('[BumpVersion] Warning: version bump failed —', err.message);
}
