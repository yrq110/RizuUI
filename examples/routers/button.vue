<template>
  <div>
    <ul>
      <li><Button type="gh">Button</Button></li>
      <li><Button type="ts">Button</Button></li>
      <li><Button type="ts-2">Button</Button></li>
      <li><Button type="mg">Button</Button></li>
      <li><Button type="cp">Button</Button></li>
      <li><Button type="ep"><template slot="ep-txt">Button</template></Button></li>
      <li><Button type="gc">Button</Button></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
li {
  margin-top: 10px;
}
</style>
