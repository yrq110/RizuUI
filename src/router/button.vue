<template>
  <div>
    <ul>
      <li><Button type="gh">Button</Button></li>
      <li><Button type="ts">Button</Button></li>
      <li><Button type="ts-2">Button</Button></li>
      <li><Button type="mg">Button</Button></li>
      <li><Button type="cp">Button</Button></li>
      <li><Button type="ep"></Button></li>
    </ul>
  </div>
</template>

<script>
import Button from '../components/button'
export default {
  components: { Button }
}
</script>

<style scoped>
  li {
    margin-top: 10px;
  }
</style>
