#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running tests with coverage for all packages...\n');

// Clean root coverage directory
const coverageDir = path.join(process.cwd(), 'coverage');
if (fs.existsSync(coverageDir)) {
  fs.rmSync(coverageDir, { recursive: true, force: true });
}
fs.mkdirSync(coverageDir, { recursive: true });

// Run tests with coverage for all packages using lerna
// Each package will generate its own coverage, then we'll aggregate
console.log('Running tests with coverage for all packages via lerna...');
try {
  execSync('lerna run test:coverage', { stdio: 'inherit', cwd: process.cwd() });
} catch (error) {
  console.error('Error running tests:', error.message);
  process.exit(1);
}

// Aggregate coverage reports from all packages
console.log('\nAggregating coverage reports...');
const packageCoverageDirs = [
  path.join(process.cwd(), 'packages', 'tokens', 'coverage'),
  path.join(process.cwd(), 'packages', 'dsm', 'coverage'),
  path.join(process.cwd(), 'packages', 'mcp', 'coverage'),
];

// Collect all lcov.info files
const lcovFiles = [];
for (let i = 0; i < packageCoverageDirs.length; i++) {
  const dir = packageCoverageDirs[i];
  const lcovFile = path.join(dir, 'lcov.info');
  if (fs.existsSync(lcovFile)) {
    lcovFiles.push(lcovFile);
  }
}

if (lcovFiles.length === 0) {
  console.error('No coverage files found!');
  process.exit(1);
}

// Merge lcov files
const mergedLcovParts = [];
for (let i = 0; i < lcovFiles.length; i++) {
  const file = lcovFiles[i];
  mergedLcovParts.push(fs.readFileSync(file, 'utf-8'));
}
const mergedLcov = mergedLcovParts.join('\n');

// Write merged coverage
fs.writeFileSync(path.join(coverageDir, 'lcov.info'), mergedLcov);

// Copy HTML reports if they exist (use the first one as base)
let htmlReportDir = null;
for (let i = 0; i < packageCoverageDirs.length; i++) {
  const dir = packageCoverageDirs[i];
  if (fs.existsSync(path.join(dir, 'lcov-report'))) {
    htmlReportDir = dir;
    break;
  }
}

if (htmlReportDir) {
  const sourceHtml = path.join(htmlReportDir, 'lcov-report');
  const destHtml = path.join(coverageDir, 'lcov-report');
  if (fs.existsSync(sourceHtml)) {
    execSync('cp -r "' + sourceHtml + '" "' + destHtml + '"', { stdio: 'inherit' });
  }
}

console.log('\n✓ Coverage report generated successfully at coverage/lcov.info');
console.log('  Merged ' + lcovFiles.length + ' coverage files from ' + lcovFiles.length + ' packages');

