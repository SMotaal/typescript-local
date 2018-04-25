#!/usr/bin/env node

const id = 'typescript';
// const id = '../../TypeScript';
console.log(`√ require('${id}') => TypeScript v${require(id).version}`);
// console.log(Object.keys(module.constructor._cache))
