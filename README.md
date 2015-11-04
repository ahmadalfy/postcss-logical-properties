# [postcss][postcss]-logical-properties [![Build Status](https://travis-ci.org/ahmadalfy/postcss-logical-properties.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-logical-properties.svg)][npm] [![Dependency Status](https://gemnasium.com/ahmadalfy/postcss-logical-properties.svg)][deps]

> Transform start/end properties to left/right depending on LTR or RTL writing directions of the document. Currently only supporting `inline-start` and `inline-end`. More information about logical properties can be on the [CSS Working Group Logical Porprties Draft][csswg]

## Install

With [npm](https://npmjs.org/package/postcss-logical-properties) do:

```
npm install postcss-logical-properties --save-dev
```

## Example

### Input

```css
element {
  float: inline-start;
}
```

### Output

```css
element {
  float: left; /* In case the direction of the document is rtl */
  float: inline-start;
}
```

## Usage

### Use with grunt-postcss

```js
grunt.initConfig({
  postcss: {
    options: {
      ...
      processors: [
        require('postcss-logical-properties')()\
      ]
    }
  }
});
```

## Options

Type: `Object | Null`
Default: `{rootDir: 'ltr', replace: false, html: true}`

- `rootDir`       the root element direction. Can be `ltr` or `rtl`. PostCSS-logical-properties also tries to get the root direction from CSS (`html` or `:root`) and overrides this option. Use `html` option to disable this behaviour.
- `replace`       replaces rules containing the logical properties instead of adding fallbacks.
- `html`          overrides root direction from CSS `html {}` or `:root {}`

## Roadmap

- Add support for logical directional values: `block-start` and `block-end`.
- Add support for logical values for the `text-align` Property (`start` and `end`).
- Add support for logical margins and offsets: the `margin-` and `offset-` (`block-start`, `block-end`, `inline-start` and `inline-end` properties).
- Add support for logical padding and border: the `padding-` and `border-*-` (`block-start`, `block-end`, `inline-start` and `inline-end` properties).
- Add support for shorthand properties with logical Keyword (`padding`, `margin`).
- Add option to create fallbacks for the opposite direction of the document.
- Write tests

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Ahmad Alfy](https://github.com/ahmadalfy/logical-properties)

[ci]:      https://travis-ci.org/ahmadalfy/postcss-logical-properties
[deps]:    https://gemnasium.com/ahmadalfy/postcss-logical-properties
[npm]:     http://badge.fury.io/js/postcss-logical-properties
[postcss]: https://github.com/postcss/postcss
[csswg]:   https://drafts.csswg.org/css-logical-props/
