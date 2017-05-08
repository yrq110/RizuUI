<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'rz-btn'
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      required: false,
      default: 'gh'
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    }
  }
}
</script>
