# jstransformer-jstransformer

[JSTransformer](http://github.com/jstransformers) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jstransformer/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jstransformer)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-jstransformer/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-jstransformer)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jstransformer/master.svg)](http://david-dm.org/jstransformers/jstransformer-jstransformer)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jstransformer.svg)](https://www.npmjs.org/package/jstransformer-jstransformer)

![I heard you like JSTransformers, so I put JSTransformers in your JSTransformers](screenshot.jpg)

## Installation

    npm install jstransformer-jstransformer

## API

This example renders JSTransformers' [Handlebars](http://handlebarsjs.com) through JSTransformers.

```js
var jstransformer = require('jstransformer')(require('jstransformer-jstransformer'))

var options = {
  engine: 'handlebars'
  // or
  // engine: require('jstransformer-handlebars')
};
var locals = {
  title: 'Hello World!'
}

jstransformer.render('<h1>{{title}}</h1>', options, locals).body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
