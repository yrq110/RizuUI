<template>
  <div :class="classes">
    <template v-if="type === 'lig'">
      <input type="radio" :id="label" :name="name" :value="label" v-model="model"/>
      <label :for="label">
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
      type: String
    },
    label: {},
    value: {}
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    },
    model: {
      get () {
        console.log(this.value)
        return this.value
      },
      set (val) {
        console.log('set value: ' + val)
        this.$emit('input', val)
      }
    }
  }
}
</script>
