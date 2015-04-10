minified-name
-------------

[![Build Status](https://travis-ci.org/wankdanker/node-minified-name.svg)](https://travis-ci.org/wankdanker/node-minified-name)

Create filename.min.ext from filename.ext

usage
-----

```js
var mn = require('minified-name');
console.log(mn('jquery.js');)
//jquery.min.js

console.log(mn('jquery.js','.super-minified'))
//jquery.super-minified.js
```

license
-------
MIT
