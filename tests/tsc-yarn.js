#!/usr/bin/env node
const { spawnSync } = require('child_process');

const main = 'tsc-local';
const args = [main, '-p', './packagex'];
const command = 'yarn';
const options = { stdio: 'inherit' };
const commandline = `${command} ${args.join(' ')}`;

const { status } = spawnSync(command, args, options);

status
  && process.exit(status)
  || console.log(`√ Run: "${commandline}"`)

// if (error) throw error;
// error
//   ? console.warn(
//     `X Run: "${commandline}"\n\n%s\n`,
//     `    ${error.stack}`.replace(/\n/g, '\n  ')
//   )
//   : console.log(`√ Run: "${commandline}"`)
