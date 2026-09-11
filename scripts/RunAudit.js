#!/usr/bin/env node
/**
 * RunAudit.js
 *
 * Engineering audit script for Visual Dev Docs.
 * Runs a series of automated checks against the codebase and generates a
 * full report at doc/review.md (AGENTS.md §20.1).
 *
 * Sections produced:
 *   1. Header
 *   2. Executive Summary
 *   3. Overall Scorecard (the only section shown to the user after commit)
 *   4. Critical Issues
 *   5. Code Quality Snapshot
 *   6. Refactoring Opportunities
 *   7. Production Readiness Checklist
 *   8. Top 25 Improvements
 *   9. Category Detail Scores
 *   10. Final Verdict
 *
 * Non-blocking — exits 0 even when issues are found.
 *
 * Usage:
 *   node scripts/RunAudit.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DOC_DIR = path.join(ROOT, 'doc');
const OUTPUT = path.join(DOC_DIR, 'review.md');

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Runs a shell command and returns { stdout, stderr, code }.
 * Never throws.
 * @param {string} cmd
 * @returns {{ stdout: string, stderr: string, code: number }}
 */
function run(cmd) {
  try {
    const stdout = execSync(cmd, { cwd: ROOT, stdio: ['pipe', 'pipe', 'pipe'] }).toString().trim();
    return { stdout, stderr: '', code: 0 };
  } catch (err) {
    return {
      stdout: (err.stdout || '').toString().trim(),
      stderr: (err.stderr || '').toString().trim(),
      code: err.status || 1,
    };
  }
}

/**
 * Checks if a file or directory exists.
 * @param {string} rel Relative path from project root
 * @returns {boolean}
 */
function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

/**
 * Reads a file safely, returning '' on error.
 * @param {string} rel
 * @returns {string}
 */
function readFile(rel) {
  try {
    return fs.readFileSync(path.join(ROOT, rel), 'utf8');
  } catch {
    return '';
  }
}

// ── Checks ────────────────────────────────────────────────────────────────────

/**
 * Represents a scored audit category.
 * @typedef {{ name: string, score: number, max: number, notes: string[] }} Category
 */

const timestamp = new Date().toISOString();
const commitHash = run('git rev-parse HEAD').stdout.slice(0, 8) || 'uncommitted';
const branchName = run('git rev-parse --abbrev-ref HEAD').stdout || 'unknown';
const version = readFile('VERSION').trim() || '0.0.0';

/** @type {Category[]} */
const categories = [];
/** @type {string[]} */
const criticalIssues = [];
/** @type {string[]} */
const improvements = [];

// ── 1. Project Structure ──────────────────────────────────────────────────────
{
  const cat = { name: 'Project Structure', score: 0, max: 10, notes: [] };

  const required = [
    'apps',
    'packages',
    'scripts',
    '.env.example',
    'VERSION',
    'turbo.json',
    'pnpm-workspace.yaml',
    'AGENTS.md',
    '.husky/pre-commit',
    '.husky/commit-msg',
    '.gitignore',
    'commitlint.config.cjs',
    '.prettierrc',
  ];

  let found = 0;
  for (const f of required) {
    if (exists(f)) {
      found++;
    } else {
      cat.notes.push(`Missing: ${f}`);
      if (['apps', 'packages', '.env.example', 'VERSION'].includes(f)) {
        criticalIssues.push(`Required file/directory missing: ${f}`);
      }
    }
  }

  cat.score = Math.round((found / required.length) * cat.max);
  categories.push(cat);
}

// ── 2. Gitignore Compliance ───────────────────────────────────────────────────
{
  const cat = { name: 'Gitignore Compliance', score: 0, max: 10, notes: [] };
  const gitignore = readFile('.gitignore');

  const mustIgnore = [
    { pattern: 'pnpm-lock.yaml', label: 'pnpm lock file' },
    { pattern: 'node_modules', label: 'node_modules' },
    { pattern: '.env', label: '.env files' },
    { pattern: 'doc/', label: 'internal doc/ folder' },
    { pattern: 'audit-prompt.md', label: 'audit-prompt.md' },
  ];

  let compliant = 0;
  for (const { pattern, label } of mustIgnore) {
    if (gitignore.includes(pattern)) {
      compliant++;
    } else {
      cat.notes.push(`Not in .gitignore: ${label} (${pattern})`);
      criticalIssues.push(`.gitignore missing entry for: ${pattern}`);
    }
  }

  // Check pnpm-lock.yaml is not tracked
  const tracked = run('git ls-files pnpm-lock.yaml').stdout;
  if (tracked) {
    cat.notes.push('pnpm-lock.yaml is still tracked in git history');
    criticalIssues.push('pnpm-lock.yaml is tracked in git — remove from history');
  } else {
    compliant++;
  }

  cat.score = Math.min(cat.max, Math.round(((compliant) / (mustIgnore.length + 1)) * cat.max));
  categories.push(cat);
}

// ── 3. Dependency Security ────────────────────────────────────────────────────
{
  const cat = { name: 'Dependency Security', score: 0, max: 10, notes: [] };
  const audit = run('pnpm audit --json 2>/dev/null || echo "{}"');
  let high = 0;
  let critical = 0;

  try {
    const result = JSON.parse(audit.stdout || '{}');
    const metadata = result.metadata || {};
    const vuln = metadata.vulnerabilities || {};
    high = vuln.high || 0;
    critical = vuln.critical || 0;
  } catch {
    cat.notes.push('Could not parse pnpm audit JSON — skipping vulnerability check');
  }

  if (critical > 0) {
    criticalIssues.push(`${critical} CRITICAL vulnerabilities found in dependencies`);
    cat.notes.push(`Critical vulnerabilities: ${critical}`);
  }
  if (high > 0) {
    cat.notes.push(`High vulnerabilities: ${high}`);
    improvements.push('Resolve high-severity dependency vulnerabilities');
  }

  // Score: 10 if 0 critical+high, -2 per critical, -1 per high
  cat.score = Math.max(0, cat.max - critical * 2 - high);
  categories.push(cat);
}

// ── 4. TypeScript Strictness ──────────────────────────────────────────────────
{
  const cat = { name: 'TypeScript Strictness', score: 0, max: 10, notes: [] };
  const tsconfig = readFile('tsconfig.json');

  try {
    const ts = JSON.parse(tsconfig);
    const co = ts.compilerOptions || {};
    if (co.strict === true) {
      cat.score += 6;
    } else {
      cat.notes.push('"strict": true not set in root tsconfig.json');
      criticalIssues.push('TypeScript strict mode is disabled — enable "strict": true');
    }
    if (co.noImplicitAny === true || co.strict === true) cat.score += 2;
    if (co.strictNullChecks === true || co.strict === true) cat.score += 2;
  } catch {
    cat.notes.push('Could not parse tsconfig.json');
  }

  cat.score = Math.min(cat.max, cat.score);
  categories.push(cat);
}

// ── 5. Lint & Formatting ──────────────────────────────────────────────────────
{
  const cat = { name: 'Lint & Formatting', score: 0, max: 10, notes: [] };
  
  const eslintResult = run('pnpm eslint . --max-warnings 0 2>&1 | tail -5');
  const hasEslintConfig = exists('eslint.config.mjs') || exists('.eslintrc.js') || exists('.eslintrc.json');
  const hasPrettier = exists('.prettierrc') || exists('.prettierrc.json') || exists('prettier.config.js');
  const hasLintStaged = exists('.lintstagedrc') || exists('.lintstagedrc.json');

  if (hasEslintConfig) { cat.score += 3; } else { cat.notes.push('No ESLint config found'); }
  if (hasPrettier) { cat.score += 3; } else { cat.notes.push('No Prettier config found'); }
  if (hasLintStaged) { cat.score += 2; } else { cat.notes.push('No lint-staged config found'); }
  if (eslintResult.code === 0) { cat.score += 2; } else { cat.notes.push('ESLint reported errors'); improvements.push('Fix ESLint errors'); }

  cat.score = Math.min(cat.max, cat.score);
  categories.push(cat);
}

// ── 6. Git Hygiene ────────────────────────────────────────────────────────────
{
  const cat = { name: 'Git Hygiene', score: 0, max: 10, notes: [] };

  const hasCommitlint = exists('commitlint.config.cjs') || exists('commitlint.config.js');
  const hasHusky = exists('.husky/pre-commit');
  const hasCommitMsg = exists('.husky/commit-msg');
  const precommit = readFile('.husky/pre-commit');
  const hasVersionBump = precommit.includes('BumpVersion') || precommit.includes('bumpVersion');
  const hasReleaseNote = precommit.includes('GenerateReleaseNote') || precommit.includes('releaseNote');
  const hasAudit = precommit.includes('RunAudit') || precommit.includes('audit');

  if (hasCommitlint) { cat.score += 2; } else { cat.notes.push('No commitlint config'); }
  if (hasHusky) { cat.score += 2; } else { cat.notes.push('No pre-commit hook'); }
  if (hasCommitMsg) { cat.score += 2; } else { cat.notes.push('No commit-msg hook'); }
  if (hasVersionBump) { cat.score += 2; } else { cat.notes.push('pre-commit does not call BumpVersion.js'); improvements.push('Add BumpVersion.js call to pre-commit hook'); }
  if (hasReleaseNote) { cat.score += 1; } else { cat.notes.push('pre-commit does not call GenerateReleaseNote.js'); }
  if (hasAudit) { cat.score += 1; } else { cat.notes.push('pre-commit does not call RunAudit.js'); }

  cat.score = Math.min(cat.max, cat.score);
  categories.push(cat);
}

// ── 7. Environment Config ─────────────────────────────────────────────────────
{
  const cat = { name: 'Environment Config', score: 0, max: 10, notes: [] };
  const envExample = readFile('.env.example');

  const requiredVars = [
    'DATABASE_URL',
    'BETTER_AUTH_SECRET',
    'ALLOWED_ORIGINS',
    'BCRYPT_SALT_ROUNDS',
    'PORT_API',
    'PORT_WEB',
    'NODE_ENV',
    'CRON_SECRET',
  ];

  let found = 0;
  for (const v of requiredVars) {
    if (envExample.includes(v)) {
      found++;
    } else {
      cat.notes.push(`Missing from .env.example: ${v}`);
    }
  }

  cat.score = Math.round((found / requiredVars.length) * cat.max);

  // Penalise if .env is committed
  const envTracked = run('git ls-files .env').stdout;
  if (envTracked) {
    cat.score = 0;
    criticalIssues.push('.env file is tracked in git — remove immediately!');
    cat.notes.push('.env is committed to git');
  }

  categories.push(cat);
}

// ── 8. Scripts Completeness ───────────────────────────────────────────────────
{
  const cat = { name: 'Scripts Completeness', score: 0, max: 10, notes: [] };

  const required_scripts = [
    { path: 'scripts/BumpVersion.js', label: 'BumpVersion.js' },
    { path: 'scripts/GenerateReleaseNote.js', label: 'GenerateReleaseNote.js' },
    { path: 'scripts/RunAudit.js', label: 'RunAudit.js' },
  ];

  let found = 0;
  for (const { path: p, label } of required_scripts) {
    if (exists(p)) {
      found++;
    } else {
      cat.notes.push(`Missing script: ${label}`);
    }
  }

  cat.score = Math.round((found / required_scripts.length) * cat.max);
  categories.push(cat);
}

// ── 9. README & Documentation ─────────────────────────────────────────────────
{
  const cat = { name: 'README & Documentation', score: 0, max: 10, notes: [] };
  const readme = readFile('README.md');

  const requiredSections = ['prerequisite', 'install', 'usage', 'test', 'environment'];
  let found = 0;
  for (const section of requiredSections) {
    if (readme.toLowerCase().includes(section)) {
      found++;
    } else {
      cat.notes.push(`README missing section about: ${section}`);
      improvements.push(`Add "${section}" section to README.md`);
    }
  }

  if (readme.length > 500) cat.score += 5;
  else { cat.notes.push('README is very short'); }

  cat.score += Math.round((found / requiredSections.length) * 5);
  cat.score = Math.min(cat.max, cat.score);
  categories.push(cat);
}

// ── 10. Turborepo Config ──────────────────────────────────────────────────────
{
  const cat = { name: 'Turborepo Config', score: 0, max: 10, notes: [] };
  const turbo = readFile('turbo.json');

  try {
    const t = JSON.parse(turbo);
    const tasks = t.tasks || {};
    if (tasks.build) { cat.score += 3; } else { cat.notes.push('No "build" task in turbo.json'); }
    if (tasks.dev) { cat.score += 3; } else { cat.notes.push('No "dev" task in turbo.json'); }
    if (tasks.lint) { cat.score += 2; } else { cat.notes.push('No "lint" task in turbo.json'); }
    if (tasks['type-check']) { cat.score += 2; } else { cat.notes.push('No "type-check" task in turbo.json'); }

    // Check env pass-through for dev
    const devTask = tasks.dev || {};
    if (devTask.env && Array.isArray(devTask.env)) {
      cat.score = Math.min(cat.max, cat.score);
    } else {
      cat.notes.push('turbo.json dev task is missing env pass-through (PORT_API, PORT_WEB)');
      improvements.push('Add env pass-through to turbo.json dev task for PORT_API and PORT_WEB');
    }
  } catch {
    cat.notes.push('Could not parse turbo.json');
  }

  cat.score = Math.min(cat.max, cat.score);
  categories.push(cat);
}

// ── Compute Overall Score ─────────────────────────────────────────────────────

const totalScore = categories.reduce((sum, c) => sum + c.score, 0);
const totalMax = categories.reduce((sum, c) => sum + c.max, 0);
const overallPercent = (totalScore / totalMax) * 10;
const overallScore = Math.round(overallPercent * 10) / 10;

// ── Build Report ──────────────────────────────────────────────────────────────

/**
 * Formats the overall scorecard table (section 3 — displayed to user after commit).
 */
function buildScorecard() {
  const rows = categories
    .map((c) => `| ${c.name.padEnd(30)} | ${String(c.score).padStart(5)} / ${c.max}  |`)
    .join('\n');

  const verdict = overallScore >= 8.5 ? '✅ PASS — ready for next phase' : '❌ FAIL — fix issues before proceeding';

  return `## 3. Overall Scorecard

| Category                       | Score       |
|--------------------------------|-------------|
${rows}
| **OVERALL**                    | **${overallScore} / 10** |

**Phase Gate**: ${verdict}
`;
}

const report = `# Engineering Audit Report — Visual Dev Docs
> Generated: ${timestamp}
> Branch: \`${branchName}\` | Commit: \`${commitHash}\` | Version: v${version}

---

## 1. Header

| Field     | Value            |
|-----------|------------------|
| Timestamp | ${timestamp}     |
| Branch    | ${branchName}    |
| Commit    | ${commitHash}    |
| Version   | v${version}      |

---

## 2. Executive Summary

Overall score: **${overallScore} / 10**

${overallScore >= 8.5 ? '✅ The codebase meets the quality gate threshold (≥ 8.5). Safe to proceed to the next phase.' : `❌ The codebase does NOT meet the quality gate threshold (≥ 8.5). ${criticalIssues.length} critical issue(s) must be resolved before proceeding.`}

Critical issues found: **${criticalIssues.length}**

---

${buildScorecard()}

---

## 4. Critical Issues

${criticalIssues.length === 0 ? '_No critical issues found._' : criticalIssues.map((i, n) => `${n + 1}. ⛔ ${i}`).join('\n')}

---

## 5. Code Quality Snapshot

${categories.map((c) => {
  const bar = '█'.repeat(c.score) + '░'.repeat(c.max - c.score);
  return `### ${c.name} — ${c.score}/${c.max}\n\`${bar}\`\n${c.notes.length ? c.notes.map((n) => `- ${n}`).join('\n') : '_No issues_'}`;
}).join('\n\n')}

---

## 6. Refactoring Opportunities

${improvements.length === 0 ? '_None identified at this stage._' : improvements.map((i, n) => `${n + 1}. ${i}`).join('\n')}

---

## 7. Production Readiness Checklist

- [${exists('.env.example') ? 'x' : ' '}] \`.env.example\` present with all required vars
- [${exists('VERSION') ? 'x' : ' '}] VERSION file exists
- [${exists('.husky/pre-commit') ? 'x' : ' '}] Pre-commit hooks configured
- [${exists('scripts/BumpVersion.js') ? 'x' : ' '}] BumpVersion.js script exists
- [${exists('scripts/GenerateReleaseNote.js') ? 'x' : ' '}] GenerateReleaseNote.js script exists
- [${exists('scripts/RunAudit.js') ? 'x' : ' '}] RunAudit.js script exists
- [${exists('AGENTS.md') ? 'x' : ' '}] AGENTS.md present
- [${criticalIssues.filter(i => i.includes('.env') && i.includes('tracked')).length === 0 ? 'x' : ' '}] No secrets committed to git
- [${run('git ls-files pnpm-lock.yaml').stdout === '' ? 'x' : ' '}] Lock files excluded from git

---

## 8. Top 25 Improvements

${[...criticalIssues.map(i => `🔴 (Critical) ${i}`), ...improvements].slice(0, 25).map((i, n) => `${n + 1}. ${i}`).join('\n') || '_No improvements identified._'}

---

## 9. Category Detail Scores

${categories.map((c) => `| ${c.name} | ${c.score} | ${c.max} | ${((c.score / c.max) * 100).toFixed(0)}% |`).join('\n')}

---

## 10. Final Verdict

**Score: ${overallScore} / 10**

${overallScore >= 9 ? '🏆 Excellent — exemplary quality for this phase.' : overallScore >= 8.5 ? '✅ Good — meets quality gate. Proceed to next phase.' : overallScore >= 7 ? '⚠️ Acceptable — address noted issues before next phase.' : '❌ Below threshold — significant issues must be resolved.'}

_This report is internal-only and must not be pushed to the remote repository._
`;

// ── Write ─────────────────────────────────────────────────────────────────────

try {
  if (!fs.existsSync(DOC_DIR)) {
    fs.mkdirSync(DOC_DIR, { recursive: true });
  }
  fs.writeFileSync(OUTPUT, report, 'utf8');
  console.log(`[RunAudit] Report written to doc/review.md`);
  console.log('');
  console.log('══════════════════════════════════════════════════════');
  console.log('  OVERALL SCORECARD');
  console.log('══════════════════════════════════════════════════════');
  for (const c of categories) {
    console.log(`  ${c.name.padEnd(32)} ${String(c.score).padStart(2)} / ${c.max}`);
  }
  console.log('──────────────────────────────────────────────────────');
  console.log(`  ${'OVERALL'.padEnd(32)} ${overallScore} / 10`);
  console.log('══════════════════════════════════════════════════════');
  if (overallScore >= 8.5) {
    console.log('  ✅ Quality gate PASSED — ready for next phase');
  } else {
    console.log('  ❌ Quality gate FAILED — resolve issues before next phase');
  }
  console.log('');
} catch (err) {
  console.warn('[RunAudit] Warning: could not write audit report —', err.message);
}
