<template>
  <div :class="classes" @click="handleClick">
    <slot v-if="type !== 'ep'">
      <template v-if="type !== 'kr'">
        <template v-if="type !== 'ace'">
          <template v-if="type !== 'two'">
          #btn
          </template>
        </template>
      </template>
    </slot>

    <template v-if="type === 'cp'">
      <span></span>
      <svg height="40" width="30" viewBox="0 0 24 24" >
          <polyline points="6,6 12,12 6,18" stroke-width="3" stroke="black" fill="white"/>
      </svg>
    </template>

    <template v-if="type === 'ep'">
      <i class="plus">
        <span class="bar">
        </span>
      </i>
      <span class="btn-txt">
        <slot name="inner-txt">ep-txt</slot>
      </span>
    </template>

    <template v-if="type === 'kr'">
      <span class="btn-txt">
        <slot name="inner-txt">kr-txt</slot>
      </span>
      <i></i>
    </template>

    <template v-if="type === 'ace'">
      <span><slot name="inner-txt">ace-txt</slot></span>
      <span><slot name="inner-txt">ace-txt</slot></span>
    </template>

    <template v-if="type === 'two'">
      <span class="label"><slot name="inner-txt">two-txt</slot></span>
      <span class="border-r"></span>
      <span class="border-t"></span>
      <span class="border-l"></span>
      <span class="border-b"></span>
    </template>
  </div>
</template>

<script>
const prefixCls = 'rz-btn'
export default {
  name: 'RzButton',
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
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
