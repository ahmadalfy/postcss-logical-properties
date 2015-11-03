# [postcss][postcss]-logical-properties [![Build Status](https://travis-ci.org/ahmadalfy/postcss-logical-properties.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-logical-properties.svg)][npm] [![Dependency Status](https://gemnasium.com/ahmadalfy/postcss-logical-properties.svg)][deps]

> Transform start/end properties to left/right depending on LTR or RTL writing directions of the document

## Install

With [npm](https://npmjs.org/package/postcss-logical-properties) do:

```
npm install postcss-logical-properties --save
```

## Example

### Input

```css
h1 {
    color: red;
}
```

### Output

```css
h1{color:red}
```

## API

### logicalProperties([options])

#### options

##### foo

Type: `boolean`
Default: `true`

Description of what it does. An example:

```js
var css = 'h1 { color: red }';
console.log(postcss([ require('postcss-logical-properties')({foo: true}) ]).process(css).css);

// => 'h1{color:red}'
```

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Ahmad Alfy](https://github.com/ahmadalfy/logical-properties)

[ci]:      https://travis-ci.org/ahmadalfy/postcss-logical-properties
[deps]:    https://gemnasium.com/ahmadalfy/postcss-logical-properties
[npm]:     http://badge.fury.io/js/postcss-logical-properties
[postcss]: https://github.com/postcss/postcss
