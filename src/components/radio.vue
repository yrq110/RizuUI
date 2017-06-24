<template>
  <div :class="classes">
    <template v-if="type === 'lig'">
      <input type="radio" :id="id" :name="name" :value="value"/>
      <label :for="id">
        <slot></slot>
        <svg viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="10"/>
        </svg>
      </label>
    </template>
  </div>
</template>
<script>
const prefixCls = 'rz-radio'
export default {
  name: 'RzRadio',
  props: {
    type: {
      type: String,
      required: false,
      default: 'lig'
    },
    name: {
      type: String,
      default: 'radio_name'
    },
    id: {
      type: String,
      default: 'radio_id'
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    }
  }
}
</script>
