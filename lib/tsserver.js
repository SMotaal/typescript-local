module.exports =
  require('../require')
    .try('typescript/built/local/tsserver.js')
  || {};
