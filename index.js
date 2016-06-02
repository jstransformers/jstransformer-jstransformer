'use strict';

var jstransformer = require('jstransformer');

exports.name = 'jstransformer';
exports.outputFormat = 'html';

/**
 * Returns the name of the transformer from the given options.
 */
function getTransform (options) {
  if (typeof options == "string" || options instanceof String) {
    return options;
  }
  else if (typeof options == "object" && options.engine) {
    return options.engine;
  }
  else {
    throw new Error("options.engine not found.");
  }
}

/**
 * Constructs a new JSTransformer from the given options.
 */
function constructTransformer (options) {
  return jstransformer(require('jstransformer-' + getTransform(options)));
}

exports.render = function (str, options, locals) {
  return constructTransformer(options).render(str, options, locals || {});
};

exports.renderFile = function (file, options, locals) {
  return constructTransformer(options).renderFile(file, options, locals || {});
};

exports.renderAsync = function (str, options, locals, callback) {
  return constructTransformer(options).renderAsync(str, options, locals || {}, callback);
};

exports.renderFileAsync = function (file, options, locals, callback) {
  return constructTransformer(options).renderFileAsync(file, options, locals || {}, callback);
};

exports.compile = function (str, options) {
  return constructTransformer(options).compile(str, options);
};

exports.compileAsync = function (str, options, callback) {
  return constructTransformer(options).compileAsync(str, options, callback);
};

exports.compileFile = function (str, options) {
  return constructTransformer(options).compileFile(str, options);
};

exports.compileFileAsync = function (str, options, callback) {
  return constructTransformer(options).compileFileAsync(str, options, callback);
};
