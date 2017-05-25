<template>
  <div :class="classes">
    <template v-if="type === 'zh'">
      <svg width="180" height="100" viewBox="0 0 180 100">
        <circle cx="30" cy="50" r="10" fill="blue">
          <animate attributeName="cy" begin="0s" dur="1s" values="50;57;50;43;50" repeatCount="indefinite"/>
        </circle>
        <circle cx="70" cy="50" r="10" fill="blue">
          <animate attributeName="cy" begin=".1s" dur="1s" values="50;57;50;43;50" repeatCount="indefinite"/>
        </circle>
        <circle cx="110" cy="50" r="10" fill="blue">
          <animate attributeName="cy" begin=".2s" dur="1s" values="50;57;50;43;50" repeatCount="indefinite"/>
        </circle>
        <circle cx="150" cy="50" r="10" fill="blue">
          <animate attributeName="cy" begin=".4s" dur="1s" values="50;57;50;43;50" repeatCount="indefinite"/>
        </circle>
      </svg>
    </template>

    <template v-if="type === 'bd'">
      <svg width="200" height="100" viewBox="0 0 200 100">
        <circle cx="100" cy="50" r="10" fill="blue">
          <animate id="b-step-1" attributeName="cx" begin="0s;b-step-2.end+1s" dur="2s" values="100;50;100;50;100" />
          <animate id="b-step-2" attributeName="cx" begin="b-step-1.end+1s" dur="2s" values="100;150;100;150;100" />
        </circle>
        <circle cx="100" cy="50" r="10" fill="red">
          <animate id="r-step-1" attributeName="cx" begin="0s;r-step-3.end+0s" dur="1s" values="100;150;100" />
          <animate id="r-step-2" attributeName="cx" begin="r-step-1.end+1s" dur="2s" values="100;50;100;50;100" />
          <animate id="r-step-3" attributeName="cx" begin="r-step-2.end+1s" dur="1s" values="100;150;100" />
        </circle>
        <circle cx="100" cy="50" r="10" fill="grey">
          <animate id="g-step-1" attributeName="cx" begin="1s;g-step-2.end+1s" dur="2s" values="100;150;100;150;100" />
          <animate id="g-step-2" attributeName="cx" begin="g-step-1.end+1s" dur="2s" values="100;50;100;50;100" />
        </circle>
      </svg>
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
      default: 'zh'
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    }
  }
}
</script>
