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

const points = [
  {
    x: 1,
    y: 1,
    z: 1,
    color: `rgba(255, 0, 0, .3)`
  },
  {
    x: 1,
    y: - 1,
    z: 0,
    color: `#FF0000`
  }
];

const vertices = pointsToVertices(points);
console.log(vertices);
// > [1, 1, 1,  1, 0, 0, .3,  1, -1, 0,  1, 0, 0, 1]

```

Each point can have **x, y, z and color** (vec4, hex, rgb or rgba) properties
<br/>`points-to-vertices` fills in the blanks with (provided) defaults.

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add points-to-vertices (--dev)

or npm

	npm install points-to-vertices (--save-dev)


### configuration

You can pass in extra options as a configuration object *(all parameters are optional)*

```js
import pointsToVertices from 'points-to-vertices';

const points = [
  {
    x: 1,
    y: 1,
    z: -1,
    color: `rgba(255, 0, 0, .3)`
  },
  {
    x: 1,
    y: - 1,
  }
];

const vertices = pointsToVertices(points, {
  meta: true, // wrap the data in an object
  color: false // no colors in result vertices array, only points
  dx: 1, // default x
  dy: 1, // default y
  dz: - 1, // default z
  dcolor: `#FFFF00` // default color
});

```

➖ **color** ( boolean ) ` ✏️ true `
<br/> 📝 output colors in vertices array
<br/> ℹ️ `false` => `[x, y, z]` vertex
<br/> ℹ️ `true` =>  `[x, y, z, r, g, b, a]` vertex (default)

➖ **meta** ( boolean ) ` ✏️ false `
<br/> 📝 wrap the result in an object (with a meta property)
<br/> ℹ️ returns extra info on vertices, start and end of position, color, total length
<br/> ℹ️ `meta: false` returns a simple vertices array

example output with `meta: true` (annotated for clarity)

```js
{
 
  vertices: [ 
  
  	// point 1
  	0, 0, 1,     // position (x, y, z)
  	0, 1, 1, 1,  // color (r, g, b, a)
  	
  	// point 2
  	1, - 1, 0,    // position (x, y, z)
  	0, 1, 1, 1   // color (r, g, b, a)
  	
  ],
  
  meta: { 
  
   	// each vertex is 7 long
   	length: 7,    	
   	
   	// position is 3 long, starts at index 0
    position: { start: 0, length: 3 }, 
    
    // color is 4 long, starts at index 3
    color: { start: 3, length: 4 }   
  } 
  
}
```

**you can pass in default values for x, y, z and color**
<br/> if no value is set for x, y, z, or color, `points-to-vertices` will use the default

➖ **dx** ( number ) ` ✏️ 0 `
<br/> 📝 default x for a vertex

➖ **dy** ( number ) ` ✏️ 0 `
<br/> 📝 default y for a vertex

➖ **dz** ( number ) ` ✏️ 0 `
<br/> 📝 default z for a vertex

➖ **dcolor** ( vec4 | string ) ` ✏️ [0, 0, 0, 1] (black) `
<br/> 📝 default z for a vertex

### Examples

See [`example`](example/script.js) folder

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
