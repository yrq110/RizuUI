<template>
  <div :type="htmlType" :class="classes">
    Hello
  </div>
</template>

<script>
const prefixCls = 'rz-btn'

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      required: true,
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
