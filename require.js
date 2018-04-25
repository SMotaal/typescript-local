const

  localRequire =
    (id) => require(id),

  localResolve = localRequire.resolve =
    (id) => require.resolve(id),

  tryCall =
    (callable, id) => {
      try { return callable(id); }
      catch (exception) { }
    };

localRequire.try =
  (id) => tryCall(localRequire, id);

localResolve.try =
  (id) => tryCall(localResolve, id);

Object.setPrototypeOf(localRequire, require);

module.exports = localRequire;
