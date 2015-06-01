'use strict';

var jstransformer = require('jstransformer');

exports.name = 'jstransformer';
exports.outputFormat = 'html';

/**
 * Returns the name of the transformer from the given options.
 */
var getTransform = function (options) {
  if (typeof options == "string" || options instanceof String) {
    return options;
  }
  else if (typeof options == "object" && options.jstransformer) {
    return options.jstransformer;
  }
  else {
    throw new Error("options.jstransformer not found.");
  }
};

/**
 * Constructs a new JSTransformer from the given options.
 */
var constructTransformer = function (options) {
  return jstransformer(require('jstransformer-' + getTransform(options)));
};

exports.render = function (str, options, locals) {
  return constructTransformer(options).render(str, options, locals || {}).body;
};

exports.renderFile = function (file, options, locals) {
  return constructTransformer(options).renderFile(file, options, locals || {}).body;
};
