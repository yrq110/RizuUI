<template>
  <div>
    <ul>
      <li><RzButton type="gh" @click="btnClick">Button</RzButton></li>
      <li><RzButton type="ts" data-text="Button"></RzButton></li>
      <li><RzButton type="ts-2">Button</RzButton></li>
      <li><RzButton type="mg">Button</RzButton></li>
      <li><RzButton type="cp">Button</RzButton></li>
      <li><RzButton type="ep"><template slot="inner-txt">Button</template></RzButton></li>
      <li><RzButton type="gc">Button</RzButton></li>
      <li><RzButton type="kr"><template slot="inner-txt">Button</template></RzButton></li>
      <li><RzButton type="ei">Button</RzButton></li>
      <li><RzButton type="ace"><template slot="inner-txt">Button</template></RzButton></li>
      <li><RzButton type="two"><template slot="inner-txt">Button</template></RzButton></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick (evt) {
      console.log('click event:' + evt)
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  margin-top: 10px;
}
</style>
