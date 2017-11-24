# JavaScript helper functions

[![npm](https://img.shields.io/npm/v/@graubnla/helpers.svg)](https://www.npmjs.com/package/@graubnla/helpers) [![Travis](https://img.shields.io/travis/lgraubner/helpers.svg)](https://travis-ci.org/lgraubner/helpers)

Loose collection of helper functions with expressiveness and minimal overhead in mind.

## Table of contents

- [General](#general)
- [DOM](#dom)
- [License](#license)

## General

### basename(str[, sep])

Returns `string`

Returns basename of a path.

```JavaScript
import basename from '@graubnla/helpers/basename';

const path = 'this/is/a/path';

basename(path); // "path"
```

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

### formatNumber(num[, precision, decimal, thousand])

Returns `string`

Formats number.

```JavaScript
import formatNumber from '@graubnla/helpers/formatNumber';

const num = 3256.1415;

console.log(formatNumber(num, 2, ',', '.')); // "3.256,14"
```

### getFileExtension(filename)

Returns `string`

Extracts file extension from filename string. Also works with path and url.

```JavaScript
import getFileExtension from '@graubnla/helpers/getFileExtension';

const ext = getFileExtension('image.png');
console.log(ext); // "png"
```

### noop()

Returns `undefined`

No operation function. Does nothing.

```JavaScript
import noop from '@graubnla/helpers/noop';

noop(); // undefined
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

### removeTrailingSlash(str)

Returns `string`

Removes trailing slashes from a string.

```JavaScript
import removeTrailinSlash from '@graubnla/helpers/removeTrailinSlash';

const newStr = removeTrailingSlash('/animal/monkey/');
console.log(newStr); // "/animal/monkey"
```

### round(num[, precision])

Returns `number`

Round numbers with given precision.

```JavaScript
import round from '@graubnla/helpers/round';

console.log(round(3.1415, 2)); // 3.14
```

### stripTags(str)

Returns `string`

Strip all html like tags from string.

```JavaScript
import stripTags from '@graubnla/helpers/stripTags';

const str = '<p>I like monkeys.</p>';

console.log(stripTags(str)); // I like monkeys.
```

### percentage(num)

Returns `string`

Generate percentage string of given input.

```JavaScript
import percentage from '@graubnla/helpers/percentage';

const num = 0.12;

console.log(percentage(num)); // "12%"
```

### slug(str)

Returns `string`

Create slug from string. Transforms to lower-case, remove whitespace, and special chars.

```JavaScript
import slug from '@graubnla/helpers/slug';

const str = 'I like monkeys.';

console.log(slug(str)); // i-like-monkeys
```

## DOM

### $(str)

Returns `Node`

Shortcut for `document.querySelector`. Returns first matching element or `null`.

```JavaScript
import $ from '@graubnla/helpers/dom/$';

const el = $('.element');
```

### $$(str)

Returns `NodeList`

Shortcut for `document.querySelectorAll`.

```JavaScript
import $$ from '@graubnla/helpers/dom/$$';

const els = $$('.element');
```

### offset(el)

Return `Object`

Returns top and left offset of an element relative to the document.

```JavaScript
import offset from '@graubnla/helpers/dom/offset';

const el = document.querySelector('#el');
console.log(offset(el)); // { top: 123, left: 456 }
```

### onReady(cb)

Executes callback on document ready.

```JavaScript
import onReady from '@graubnla/helpers/dom/onReady';

onReady(() => {
  // document ready
});
```


### scrollTo(dest[, duration, easing])

Scrolls view to specified y value or element position. Accepts duration parameter in milliseconds and an alternate [easing function](https://gist.github.com/gre/1650294). Uses [`requestAnimationFrame`](https://developer.mozilla.org/de/docs/Web/API/window/requestAnimationFrame) for performant animation.

```JavaScript
import scrollTo from '@graubnla/helpers/dom/scrollTo';

const el = document.getElementById('element');
scrollTo(el);

// scroll to top
scrollTo(0, 500);
```

## License

[MIT](https://github.com/lgraubner/helpers/blob/master/LICENSE) © [Lars Graubner](https://larsgraubner.com)
