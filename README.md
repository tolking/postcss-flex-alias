# PostCSS flex-alias [![Build Status][ci-img]][ci]

[PostCSS] plugin adds and extends some properties

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/tolking/postcss-flex-alias.svg
[ci]:      https://travis-ci.org/tolking/postcss-flex-alias

## [Documentation](https://ououe.com/lib/postcss-flex-alias.html)
Click on the Documentation to learn more

## Explain

**flex-[`type`][`justify-content`][`align-items`][`align-content`]**

### type


## Example

``` css
// input
.foo {
  display: flex-xcc;
}
```
``` css
// output
.foo {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
---

``` js
// input
.foo {
  display: flex-wbc;
}
```
``` css
// output
.foo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
```

## Usage
``` js
postcss([ require('postcss-flex-alias') ])

// or postcss.config.js
plugins: {
  'postcss-flex-alias': {}
}
```

See [PostCSS] docs for examples for your environment.
