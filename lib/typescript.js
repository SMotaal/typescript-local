module.exports =
  require('../require')
    .try('typescript/built/local/typescript.js')
  || {};
