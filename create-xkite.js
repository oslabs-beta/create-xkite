#! /usr/bin/env node
const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/oslabs-beta/xkite ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the xkite starter into ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit();

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit();

console.log(`Congratulations! Please follow the prompts to continue:`);
console.log(`1. cd ${repoName}`);
console.log(`2. npm run dev`);
