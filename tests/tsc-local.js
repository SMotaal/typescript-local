#!/usr/bin/env node
const { spawnSync } = require('child_process');

const main = '../bin/tsc';
const args = ['-p', './package'];
const command = require.resolve(main);
const options = { stdio: 'inherit' };

spawnSync(main, args, options);
console.log(`√ Run: "${main} ${args.join(' ')}"`);

