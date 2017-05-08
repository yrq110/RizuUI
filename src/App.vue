<style lang="less">
  @import "./styles/index.less";
</style>
<style scoped>
  li { list-style: none; }
</style>
<template>
  <div id="app">
    <nav>
        <ul>
            <li><router-link to="/button">Button</router-link></li>
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
