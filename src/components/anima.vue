<template>
  <div :class="classes">
    <template v-if="type == 'loading'">
      <div class="circle"></div>
      <div class="circle delay-1"></div>
      <div class="circle delay-2"></div>
      <div class="circle delay-3"></div>
    </template>
  </div>
</template>

<script>
const prefixCls = 'rz-anm'
export default {
  name: 'Anima',
  props: {
    type: {
      type: String,
      required: false,
      default: 'loading'
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    }
  }
}
</script>
