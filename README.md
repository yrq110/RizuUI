# RizuUI

<p align="center">
  <a href="https://rizu-ui.github.io" target="\_blank">
    <img src="https://github.com/yrq110/RizuUI/blob/master/assets/logo.png" width="128px">
  </a>
</p>

### A cool UI Toolkit with Vue.js

working...

## Doc

[中文文档](https://rizu-ui.github.io)

## Features
* npm + webpack + vue2
* es2015 + less

## Programming
Current components:
* button(7)
* card(4)
* navigation(2)
* hint(1)
* animate(1)

## Install
```bash
npm install rizu-ui --save
```
or
```html
<link rel="stylesheet" type="text/css" href="//unpkg.com/dist/styles/rizuui.css">
<script type="text/javascript" src="//unpkg.com/rizu-ui/dist/rizuui.min.js"></script>
```
## Usage
`main.js`
```js
import { RizuUI } from 'rizu-ui';
import 'rizu-ui/dist/styles/rizuui.css'

Vue.use(RizuUI);
```
`demo.vue`
```html
<template>
    <Button type='gh'></Button>
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
