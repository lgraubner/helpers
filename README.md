# ES2015 helpers

[![npm](https://img.shields.io/npm/v/@graubnla/helpers.svg)](https://www.npmjs.com/package/@graubnla/helpers) [![Travis](https://img.shields.io/travis/lgraubner/helpers.svg)](https://travis-ci.org/lgraubner/helpers)

Loose collection of helpers functions with expressiveness and minimal overhead in mind. All helpers are written in ES2015 and tested thoroughly.

## Table of contents

- [Usage](#usage)
- [Methods](#methods)
- [License](#license)

## Usage

This module is available on [npm](https://www.npmjs.com/).

```
$ npm install @graubnla/helpers
```

This helpers are not meant to be included as whole package. Instead you should cherry pick only the functions you need.

```JavaScript
// ES2015 module
import cloneArray from '@graubnla/helpers/cloneArray';

// CommonJS
var cloneArray = require('@graubnla/helpers/cloneArray');
```

Keep in mind that the helper functions are written in raw ES2015 and might not work in all browsers. You should transpile your code with [Babel](babeljs.io). Currently [`babel-preset-stage-3`](https://babeljs.io/docs/plugins/preset-stage-3/) is required.

## Methods

### cloneArray(arr)

Returns `Array`

Clones an array.

```Javascript
import cloneArray from '@graubnla/helpers/cloneArray';

const arr = ['monkey', 'lion'];

const clonedArr = cloneArray(arr);
```

### cloneObject(obj)

Returns `Object`

Clones an object.

```Javascript
import cloneObject from '@graubnla/helpers/cloneObject';

const obj = { animal: 'monkey' };

const clonedObj = cloneObject(obj);
```

### forEach(elements, cb)

Iterates over Array like collections such as node lists.

```JavaScript
import forEach from '@graubnla/helpers/forEach';

const list = document.getElementsByTagName('p');

forEach(list, (el, index) => {
  console.log(el, index);
});
```

### formatNumber(num[, precision, decimal, thousand])

Returns `string`

Formats number.

```JavaScript
import formatNumber from '@graubnla/helpers/formatNumber';

const num = 3256.1415;

console.log(formatNumber(num, 2, ',', '.')); // "3.256,14"
```

### off(els, type, cb[, capture])

Removes event listener from a collection of elements.

```JavaScript
import off from '@graubnla/helpers/off';

const els = document.getElementsByTagName('button');
const cb = () => { ... };
off(els, 'click', cb);
```

### on(els, type, cb[, capture])

Adds event listener to a collection of elements.

```JavaScript
import on from '@graubnla/helpers/on';

const els = document.getElementsByTagName('button');
const cb = () => { ... };
on(els, 'click', cb);
```

### onReady(cb)

Executes callback on document ready.

```JavaScript
import onReady from '@graubnla/helpers/onReady';

onReady(() => {
  // document ready
});
```

### pipe(fn1, fn2[, fn3, ...])

Pipe argument through multiple functions.

```JavaScript
import pipe from '@graubnla/helpers/pipe';

const process = pipe(fn1, fn2, fn3);
const result = process(arg);
```

### prettyJSON(obj)

Returns `string`

Pretty prints JSON string.

```JavaScript
import prettyJSON from '@graubnla/helpers/prettyJSON';

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
import round from '@graubnla/helpers/round';

console.log(round(3.1415, 2)); // 3.14
```

### scrollTo(dest[, duration, easing])

Scrolls view to specified y value or element position. Accepts duration parameter in milliseconds and an alternate [easing function](https://gist.github.com/gre/1650294). Uses [`requestAnimationFrame`](https://developer.mozilla.org/de/docs/Web/API/window/requestAnimationFrame) for performant animation.

```JavaScript
import scrollTo from '@graubnla/helpers/scrollTo';

const el = document.getElementById('element');
scrollTo(el);

// scroll to top
scrollTo(0, 500);
```

### stripTags(str)

Returns `string`

Strip all html like tags from string.

```JavaScript
import stripTags from '@graubnla/helpers/stripTags';

const str = '<p>I like monkeys.</p>';

console.log(stripTags(str)); // I like monkeys.
```

### toPercent(num)

Returns `number`

Generate percent value of given input.

```JavaScript
import toPercent from '@graubnla/helpers/toPercent';

const num = 0.12;

console.log(toPercent(num)); // 12
```

### toSlug(str)

Returns `string`

Create slug from string. Transforms to lower-case, remove whitespace, and special chars.

```JavaScript
import toSlug from '@graubnla/helpers/toSlug';

const str = 'I like monkeys.';

console.log(toSlug(str)); // i-like-monkeys
```


## License

[MIT](https://github.com/lgraubner/helpers/blob/master/LICENSE) © [Lars Graubner](https://larsgraubner.com)
