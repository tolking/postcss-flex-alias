# PostCSS flex-alias [![Build Status][ci-img]][ci]

[PostCSS] plugin easily write flex

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/tolking/postcss-flex-alias.svg
[ci]:      https://travis-ci.org/tolking/postcss-flex-alias

## [Documentation](https://ououe.com/lib/postcss-flex-alias.html)
Click on the Documentation to learn more

## Explain

**display: flex-[`flex-flow`][`justify-content`][`align-items`][`align-content`]**

### flex-flow

- `x`: row nowrap
- `y`: column nowrap
- `w`: row wrap
- `m`: column warp

### justify-content

- `s`: flex-start
- `a`: space-around
- `b`: space-between
- `c`: center
- `e`: flex-end

### align-items

- `s`: flex-start
- `b`: baseline
- `c`: center
- `e`: flex-end
- `h`: stretch

### align-content

- `s`: flex-start
- `a`: space-around
- `b`: space-between
- `c`: center
- `e`: flex-end


## Example

``` css
/* input */
.foo {
  display: flex-xcc;
}
```
``` css
 /* output */
.foo {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
---

``` css
 /* input */
.foo {
  display: flex-wbc;
}
```
``` css
/* output */
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
