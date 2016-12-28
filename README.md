# points-to-vertices

> :white_square_button: a points to vertices array convertor

![Node](https://img.shields.io/node/v/points-to-vertices.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/points-to-vertices.svg?style=flat-square)](https://www.npmjs.com/package/points-to-vertices)
[![Travis](https://img.shields.io/travis/duivvv/points-to-vertices/master.svg?style=flat-square)](https://travis-ci.org/duivvv/points-to-vertices)
[![David](https://img.shields.io/david/duivvv/points-to-vertices.svg?style=flat-square)](https://david-dm.org/duivvv/points-to-vertices)
[![Coverage Status](https://img.shields.io/coveralls/duivvv/points-to-vertices.svg?style=flat-square)](https://coveralls.io/github/duivvv/points-to-vertices)

[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

### Usage

```js
import pointsToVertices from 'points-to-vertices';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add points-to-vertices (--dev)

or npm

	npm install points-to-vertices (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import pointsToVertices from 'points-to-vertices';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
pointsToVertices

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/duivvv/points-to-vertices) example.

### Builds

If you don't use a package manager, you can [access `points-to-vertices` via unpkg (CDN)](https://unpkg.com/points-to-vertices/), download the source, or point your package manager to the url.

`points-to-vertices` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `points-to-vertices` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/points-to-vertices/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/points-to-vertices) on your page. The UMD builds make `points-to-vertices` available as a `window.pointsToVertices` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
