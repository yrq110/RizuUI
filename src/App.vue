<style lang="less">
  @import "./styles/index.less";
</style>
<style scoped>
  li { list-style: none; display: inline-block;}
</style>
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/button">Button</router-link></li>
        <li><router-link to="/card">Card</router-link></li>
        <li><router-link to="/navigation">Navigation</router-link></li>
        <li><router-link to="/carousel">Carousel</router-link></li>
        <li><router-link to="/anima">Anima</router-link></li>
        <li><router-link to="/hint">Hint</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
