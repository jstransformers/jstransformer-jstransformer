# jstransformer-jstransformer

[JSTransformer](http://github.com/jstransformers) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jstransformer/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jstransformer)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-jstransformer/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-jstransformer?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jstransformer/master.svg)](http://david-dm.org/jstransformers/jstransformer-jstransformer)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jstransformer.svg)](https://www.npmjs.org/package/jstransformer-jstransformer)

![YO DAWG](screenshot.jpg?raw=true "YO DAWG")

## Installation

    npm install jstransformer-jstransformer

## API

This example uses JSTransformers renders [Handlebars](http://handlebarsjs.com) through JSTransformers.

```js
var foo = require('jstransformer')(require('jstransformer-jstransformer'))

var options = {
  jstransformer: 'handlebars'
};
var locals = {
  title: 'Hello World!'
}

foo.render('<h1>{{title}}</h1>', options, locals).body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
