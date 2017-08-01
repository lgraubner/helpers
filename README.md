# ES2015 helpers

[![npm](https://img.shields.io/npm/v/@graubnla/helpers.svg)](https://www.npmjs.com/package/@graubnla/helpers) [![Travis](https://img.shields.io/travis/lgraubner/helpers.svg)](https://travis-ci.org/lgraubner/helpers)

Loose collection of helper functions with expressiveness and minimal overhead in mind. All helpers are written in ES2015 and tested thoroughly. You might need polyfills for older browsers.

## Table of contents

- [Usage](#usage)
- [Methods](#methods)
- [License](#license)

## Usage

This module is available on [npm](https://www.npmjs.com/).

```
$ npm install @graubnla/helpers
```

If you are using some kind of bundler ([webpack](https://webpack.js.org), [rollup](https://rollupjs.org)...) you can import it like this:

```JavaScript
// ES2015 module
import { cloneArray } from '@graubnla/helpers';

// CommonJS
var cloneArray = require('@graubnla/helpers').cloneArray;
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com/):

```HTML
<script src="https://unpkg.com/@graubnla/helpers/dist/helpers.js"></script>
```

## Methods

### $(str)

Returns `Node`

Shortcut for `document.querySelector`. Returns first matching element or `null`.

```JavaScript
import { $ } from '@graubnla/helpers';

const el = $('.element');
```

### $$(str)

Returns `NodeList`

Shortcut for `document.querySelectorAll`.

```JavaScript
import { $$ } from '@graubnla/helpers';

const els = $$('.element');
```


### cloneArray(arr)

Returns `Array`

Clones an array.

```Javascript
import { cloneArray } from '@graubnla/helpers';

const arr = ['monkey', 'lion'];

const clonedArr = cloneArray(arr);
```

### cloneObject(obj)

Returns `Object`

Clones an object.

```Javascript
import { cloneObject } from '@graubnla/helpers';

const obj = { animal: 'monkey' };

const clonedObj = cloneObject(obj);
```

### formatNumber(num[, precision, decimal, thousand])

Returns `string`

Formats number.

```JavaScript
import { formatNumber } from '@graubnla/helpers';

const num = 3256.1415;

console.log(formatNumber(num, 2, ',', '.')); // "3.256,14"
```

### getFileExtension(filename)

Returns `string`

Extracts file extension from filename string. Also works with path and url.

```JavaScript
import { getFileExtension } from '@graubnla/helpers';

const ext = getFileExtension('image.png');
console.log(ext); // "png"
```

### offset(el)

Return `Object`

Returns top and left offset of an element relative to the document.

```JavaScript
import { offset } from '@graubnla/helpers';

const el = document.querySelector('#el');
console.log(offset(el)); // { top: 123, left: 456 }
```

### onReady(cb)

Executes callback on document ready.

```JavaScript
import { onReady } from '@graubnla/helpers';

onReady(() => {
  // document ready
});
```

### pipe(fn1, fn2[, fn3, ...])

Pipe argument through multiple functions.

```JavaScript
import { pipe } from '@graubnla/helpers';

const process = pipe(fn1, fn2, fn3);
const result = process(arg);
```

### prettyJSON(obj)

Returns `string`

Pretty prints JSON string.

```JavaScript
import { prettyJSON } from '@graubnla/helpers';

const obj = {
  animal: 'monkey',
  num: 2
};

console.log(prettyJSON(obj));
// "{
//   "animal": "monkey",
//   "num": 2
// }"
```

### round(num[, precision])

Returns `number`

Round numbers with given precision.

```JavaScript
import { round } from '@graubnla/helpers';

console.log(round(3.1415, 2)); // 3.14
```

### scrollTo(dest[, duration, easing])

Scrolls view to specified y value or element position. Accepts duration parameter in milliseconds and an alternate [easing function](https://gist.github.com/gre/1650294). Uses [`requestAnimationFrame`](https://developer.mozilla.org/de/docs/Web/API/window/requestAnimationFrame) for performant animation.

```JavaScript
import { scrollTo } from '@graubnla/helpers';

const el = document.getElementById('element');
scrollTo(el);

// scroll to top
scrollTo(0, 500);
```

### stripTags(str)

Returns `string`

Strip all html like tags from string.

```JavaScript
import { stripTags } from '@graubnla/helpers';

const str = '<p>I like monkeys.</p>';

console.log(stripTags(str)); // I like monkeys.
```

### toPercent(num)

Returns `number`

Generate percent value of given input.

```JavaScript
import { toPercent } from '@graubnla/helpers';

const num = 0.12;

console.log(toPercent(num)); // 12
```

### toSlug(str)

Returns `string`

Create slug from string. Transforms to lower-case, remove whitespace, and special chars.

```JavaScript
import { toSlug } from '@graubnla/helpers';

const str = 'I like monkeys.';

console.log(toSlug(str)); // i-like-monkeys
```


## License

[MIT](https://github.com/lgraubner/helpers/blob/master/LICENSE) © [Lars Graubner](https://larsgraubner.com)
