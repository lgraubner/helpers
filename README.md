# @graubnla/helpers

Loose collection of utility functions with expressiveness and minimal overhead in mind. All helpers are written in ES2015 and are tested thoroughly.

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
import { cloneArray } from '@graubnla/helpers';

// CommonJS
var cloneArray = require('@graubnla/helpers').cloneArray;
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com/#/):

```HTML
<script src="https://unpkg.com/mqr/dist/helpers.js"></script>
```

## Methods

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
