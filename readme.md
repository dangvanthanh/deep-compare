# deep-compare [![Build Status](https://travis-ci.org/dangvanthanh/deep-compare.svg?branch=master)](https://travis-ci.org/dangvanthanh/deep-compare)

> Deep comparison of objects in JavaScript


## Install

```
$ npm install --save deep-compare
```


## Usage

```js
var deepCompare = require('deep-compare');

deepCompare({name: 'Dang Thanh'}, {name: 'Dang Thanh'});
//=> true

deepCompare({city: 'Ha Noi', population: 7500000}, {city: 'Ho Chi Minh', population: 8000000});
//=> false
```


## API

### deepCompare(o1, o2)

#### o1

Type: `Objects`

The object is first.

#### o2

Type: `Objects`

The object is second.


## License

MIT © [Dang Van Thanh](http://dangthanh.org)
