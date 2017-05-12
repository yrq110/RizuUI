<template>
  <div :class="classes">
    <slot v-if="type != 'ep'">#btn</slot>

    <span v-if="type == 'cp'"></span>
    <svg v-if="type == 'cp'" fill="#000000" height="40" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
        <polyline points="6,6 12,12 6,18" stroke-width="3" stroke="black" fill="white"/>
    </svg>

    <i v-if="type == 'ep'" class="plus">
      <span class="bar">
      </span>
    </i>
    <span v-if="type == 'ep'" class="btn-txt">
      <slot name="ep-txt">ep-txt</slot>
    </span>

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
