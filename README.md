# @graubnla/helpers

Loose collection of utility functions with expressivenes and minimal overhead in mind. All helpers are written in ES2015 and have tests.

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
Therefore you need an appropriate bundler such as browserify or webpack. Also you should likely transpile ES2015 to ES5 in your build step.

```JavaScript
// ES2015 module
import cloneArray from '@graubnla/helpers/cloneArray';

// CommonJS
var cloneArray = require('@graubnla/helpers/cloneArray');
```

## Methods

### cloneArray

Clones an array.

```Javascript
const arr = ['monkey', 'lion'];

const clonedArr = cloneArray(arr);
```

### cloneObject

Clones an object.

```Javascript
const obj = { animal: 'monkey' };

const clonedObj = cloneObject(obj);
```

### formatNumber

Formats number.

```JavaScript
const num = 3.1415;

console.log(formatNumber(num)); // 3,14
```

### onReady

```JavaScript
onReady(() => {
  // document ready
});
```

### pipe

```JavaScript
const process = pipe(fn1, fn2, fn3);
const result = process(arg);
```

### prettyJSON

Pretty prints JSON string.

```JavaScript
const obj = {
  animal: 'monkey',
  num: 2
};

console.log(prettyJSON(obj'));
//{
//  "animal": "monkey",
//  "num": 2
//}
```

### round

Round numbers with given precision.

```JavaScript
console.log(round(3.1415, 2)); // 3.14
```

### stripTags

```JavaScript
const str = '<p>I like monkeys.</p>';

console.log(stripTags(str)); // I like monkeys.
```

### toPercent

```JavaScript
const num = 0.12;

console.log(toPercent(num)); // 12
```

### toSlug

```JavaScript
const str = 'I like monkeys.';

console.log(toSlug(str)); // i-like-monkeys
```


## License

[MIT](https://github.com/lgraubner/mqr/blob/master/LICENSE) © [Lars Graubner](https://larsgraubner.com)
