#!/usr/bin/env node --experimental-modules --harmony_dynamic_import

const specs = [
  'require-public.spec.js',
  'require-local.spec.js',
  'require-local-package.spec.js',
  'import-local.spec.mjs',
  'import-local-package.spec.mjs',
  'tsc-local.spec.mjs',
  'tsc-yarn.spec.mjs',
];

// const Module = module.constructor;
// const slash = module.filename.match(/\/|\\/)[0];

async function run(...specs) {
  for (let id of specs) {
    await import(`./${id}`);
    // Module._load(`${__dirname}${slash}${id}`, null);
  }
}

run(...specs);
