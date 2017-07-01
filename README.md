<p align="center">
  <a href="https://rizu-ui.github.io" target="\_blank">
    <img src="https://github.com/yrq110/RizuUI/blob/master/assets/logo.png" width="128px">
  </a>
</p>

# RizuUI [![](https://img.shields.io/travis/yrq110/RizuUI.svg?style=flat-square)](https://travis-ci.org/yrq110/RizuUI) [![npm](https://img.shields.io/npm/v/rizu-ui.svg?style=flat-square)](https://www.npmjs.com/package/rizu-ui) [![NPM downloads](http://img.shields.io/npm/dm/rizu-ui.svg?style=flat-square)](https://npmjs.org/package/rizu-ui) [![CRAN](https://img.shields.io/npm/l/rizu-ui.svg?style=flat-square)](https://opensource.org/licenses/MIT)

### A cool UI Toolkit with Vue.js

still working...

## Doc

* [English](https://rizu-ui.github.io)
* [中文](https://rizu-ui.github.io/#/zh-cn/)

## Features

* npm + webpack + vue2
* es2015 + less

## Components

* Animation
* Button
* Card
* Navigation
* Hint
* Radio
* Checkbox

## Install

NPM
```bash
npm install rizu-ui --save
```

CDN
```html
<script src="https://vuejs.org/js/vue.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/dist/styles/rizuui.css">
<script type="text/javascript" src="https://unpkg.com/rizu-ui/dist/rizuui.min.js"></script>
```

## Usage

Import all

```js
import RizuUI from 'rizu-ui'
import 'rizu-ui/dist/styles/rizuui.css'

Vue.use(RizuUI);
```

Import components

```js
import { component } from 'rizu-ui'
Vue.component(component.name, component)
```
> When import components you should also import css file.

Use components

```html
<template>
    <RzButton type='gh'>Hello</RzButton>
</template>
<script>
  export default {
  }
</script>
```

## Thanks

* [iView](https://github.com/iview/iview)
* [vue-loading](https://github.com/jkchao/vue-loading)
* [RadonUI](https://github.com/luojilab/radon-ui)
* [iver](https://github.com/jlianphoto/iver)
* [docsify](https://github.com/qingwei-li/docsify)

## License

RizuUI is licensed under [MIT](http://opensource.org/licenses/MIT)
