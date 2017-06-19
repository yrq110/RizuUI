<template>
  <div>
    <ul>
      <li><Btn type="gh">Button</Btn></li>
      <li><RzButton type="gh">Button</RzButton></li>
      <li><RzButton type="ts" data-text="Button"></RzButton></li>
      <li><RzButton type="ts-2">Button</RzButton></li>
      <li><RzButton type="mg">Button</RzButton></li>
      <li><RzButton type="cp">Button</RzButton></li>
      <li><RzButton type="ep"><template slot="inner-txt">Button</template></RzButton></li>
      <li><RzButton type="gc">Button</RzButton></li>
      <li><RzButton type="kr"><template slot="inner-txt">Button</template></RzButton></li>
      <li><RzButton type="ei">Button</RzButton></li>
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
