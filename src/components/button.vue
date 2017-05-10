<template>
  <div :class="classes">
    <slot></slot>

    <span v-if="cp"></span>
    <svg v-if="cp" fill="#000000" height="40" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
        <polyline points="6,6 12,12 6,18" stroke-width="3" stroke="black" fill="white"/>
    </svg>

    <i v-if="ep" class="plus">
      <span class="bar">
      </span>
    </i>
    <span v-if="ep" class="btn-txt">Button</span>
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
    },
    cp () {
      if (this.type === 'cp') {
        return true
      } else {
        return false
      }
    },
    ep () {
      if (this.type === 'ep') {
        return true
      } else {
        return false
      }
    }
  },
  components: {

  }
}
</script>
