#!/usr/bin/env node
/**
 * GenerateReleaseNote.js
 *
 * Generates a release note markdown file in doc/ before each commit.
 * The file is internal-only and must NOT be pushed (doc/ is in .gitignore).
 *
 * Output: doc/release-<timestamp>-<short-hash>.md
 *
 * Release note structure (AGENTS.md §20):
 *   1. Header — PR Title, Description, Commit, Branch, Ticket
 *   2. Changed files summary
 *   3. Diff stats
 *
 * Non-blocking: if anything fails it logs a warning and exits 0.
 *
 * Usage:
 *   node scripts/GenerateReleaseNote.js [--msg "feat: add something"] [--ticket "VDD-123"]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DOC_DIR = path.join(ROOT, 'doc');

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Runs a shell command and returns trimmed stdout, or '' on failure.
 * @param {string} cmd
 * @returns {string}
 */
function git(cmd) {
  try {
    return execSync(`git ${cmd}`, { cwd: ROOT, stdio: ['pipe', 'pipe', 'pipe'] })
      .toString()
      .trim();
  } catch {
    return '';
  }
}

/**
 * Returns the CLI flag value, or the env fallback, or the default.
 * @param {string} flag   e.g. '--msg'
 * @param {string} envKey e.g. 'COMMIT_MSG'
 * @param {string} def    default string
 * @returns {string}
 */
function flag(flag_name, envKey, def = '') {
  const idx = process.argv.indexOf(flag_name);
  if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1];
  if (process.env[envKey]) return process.env[envKey];
  return def;
}

// ── Gather context ────────────────────────────────────────────────────────────

const commitHash = git('rev-parse HEAD') || 'uncommitted';
const shortHash = commitHash.slice(0, 8);
const branchName = git('rev-parse --abbrev-ref HEAD') || 'unknown';
const commitMsg = flag('--msg', 'COMMIT_MSG', git('log -1 --pretty=%s') || 'No commit message');
const ticket = flag('--ticket', 'TICKET_ID', 'N/A');

/** Reads the VERSION file for the current version. */
function readVersion() {
  const vf = path.join(ROOT, 'VERSION');
  if (!fs.existsSync(vf)) return '0.0.0';
  return fs.readFileSync(vf, 'utf8').trim();
}

const version = readVersion();

// Changed files in the last commit (or staged if still uncommitted)
const changedFiles = git('diff --cached --name-status') || git('diff HEAD~1 --name-status');

// Diff stat summary
const diffStat = git('diff --cached --stat') || git('diff HEAD~1 --stat');

// ── Build release note ────────────────────────────────────────────────────────

const timestamp = new Date().toISOString();
const filename = `release-${timestamp.replace(/[:.]/g, '-')}-${shortHash}.md`;
const outputPath = path.join(DOC_DIR, filename);

/** 
 * Formats the header block per AGENTS.md §20.
 */
function buildHeader() {
  return `# Release Note — v${version}

| Field       | Value                         |
|-------------|-------------------------------|
| **PR Title**   | ${commitMsg}               |
| **Description**| Auto-generated release note for v${version} on branch \`${branchName}\` |
| **Commit**     | \`${commitHash}\`          |
| **Branch**     | \`${branchName}\`          |
| **Ticket**     | ${ticket}                  |
| **Timestamp**  | ${timestamp}               |

---
`;
}

/**
 * Formats the list of changed files into a readable section.
 */
function buildChangedFiles() {
  if (!changedFiles) return '## Changed Files\n\n_No file changes detected._\n\n';

  const lines = changedFiles
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [statusChar, ...fileParts] = line.split(/\s+/);
      const filePath = fileParts.join(' ');
      const statusMap = {
        A: '🟢 Added',
        M: '🔵 Modified',
        D: '🔴 Deleted',
        R: '🟡 Renamed',
        C: '🟣 Copied',
      };
      const status = statusMap[statusChar] || `❓ ${statusChar}`;
      return `- ${status}: \`${filePath}\``;
    });

  return `## Changed Files\n\n${lines.join('\n')}\n\n`;
}

/**
 * Formats the diff stat section.
 */
function buildDiffStat() {
  if (!diffStat) return '## Diff Statistics\n\n_No diff available._\n\n';
  return `## Diff Statistics\n\n\`\`\`\n${diffStat}\n\`\`\`\n\n`;
}

/**
 * Builds a plain-language summary for a non-technical reader.
 */
function buildSummary() {
  return `## Change Summary

This release (v${version}) was committed on branch \`${branchName}\` with the message: **"${commitMsg}"**.

${ticket !== 'N/A' ? `Related ticket: ${ticket}.` : 'No ticket ID was specified for this change.'}

See the sections above for a full list of changed files and the diff statistics.
This document is for internal reference only and must not be pushed to the remote repository.
`;
}

const content = [
  buildHeader(),
  buildChangedFiles(),
  buildDiffStat(),
  buildSummary(),
].join('\n');

// ── Write ─────────────────────────────────────────────────────────────────────

try {
  if (!fs.existsSync(DOC_DIR)) {
    fs.mkdirSync(DOC_DIR, { recursive: true });
  }
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`[GenerateReleaseNote] Written: doc/${filename}`);
} catch (err) {
  console.warn('[GenerateReleaseNote] Warning: could not write release note —', err.message);
}
