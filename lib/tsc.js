module.exports =
  require('../require')
    .try('typescript/built/local/tsc.js')
  || {};
