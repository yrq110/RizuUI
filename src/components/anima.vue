<template>
  <div :class="classes">
    <template v-if="type === 'ball-1'">
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

    <template v-if="type === 'ball-2'">
      <svg width="200" height="100" viewBox="0 0 200 100">
        <circle cx="100" cy="50" r="10" fill="blue">
          <animate id="b-step-1" attributeName="cx" begin="0s;b-step-2.end+1s" dur="1s" values="100;50;100" keyTimes="0; .5; 1" keySplines="0 0 .58 1;.42 0 1 1" repeatCount="2" />
          <animate id="b-step-2" attributeName="cx" begin="b-step-1.end+1s" dur="1s" values="100;150;100" keyTimes="0; .5; 1" keySplines="0 0 .58 1;.42 0 1 1" repeatCount="2" />
        </circle>
        <circle cx="100" cy="50" r="10" fill="red">
          <animate id="r-step-1" attributeName="cx" begin="0s;r-step-3.end+0s" dur="1s" values="100;150;100" keyTimes="0;.5;1" keySplines="0 0 .58 1;.42 0 1 1" />
          <animate id="r-step-2" attributeName="cx" begin="r-step-1.end+1s" dur="1s" values="100;50;100"  keyTimes="0;.5;1" keySplines="0 0 .58 1;.42 0 1 1" repeatCount="2" />
          <animate id="r-step-3" attributeName="cx" begin="r-step-2.end+1s" dur="1s" values="100;150;100" keyTimes="0;.5;1" keySplines="0 0 .58 1;.42 0 1 1" />
        </circle>
        <circle cx="100" cy="50" r="10" fill="grey">
          <animate id="g-step-1" attributeName="cx" begin="1s;g-step-2.end+1s" dur="1s" values="100;150;100" keyTimes="0;.5;1" keySplines="0 0 .58 1;.42 0 1 1" repeatCount="2" />
          <animate id="g-step-2" attributeName="cx" begin="g-step-1.end+1s" dur="1s" values="100;50;100" keyTimes="0;.5;1" keySplines="0 0 .58 1;.42 0 1 1" repeatCount="2" />
        </circle>
      </svg>
    </template>

    <template v-if="type === 'ball-3'">
      <svg width="160" height="100" viewBox="0 0 160 100">
        <circle cx="40" cy="50" r="10" fill="blue">
          <animate id="ob-l-step-1" attributeName="cx" begin="0s;ob-r-step-2.end+0s" dur=".5s" to="10" calcMode="spline" keyTimes="0;1" keySplines="0 0 .58 1" fill="freeze" />
          <animate id="ob-l-step-2" attributeName="cx" begin="ob-l-step-1.end+0s;" dur=".5s" to="40" calcMode="spline" keyTimes="0;1" keySplines=".42 0 1 1" fill="freeze" />
        </circle>
        <circle cx="60" cy="50" r="10" fill="blue"></circle>
        <circle cx="80" cy="50" r="10" fill="blue"></circle>
        <circle cx="100" cy="50" r="10" fill="blue"></circle>
        <circle cx="120" cy="50" r="10" fill="blue">
          <animate id="ob-r-step-1"attributeName="cx" begin="ob-l-step-2.end+0s" dur=".5s" to="150" calcMode="spline" keyTimes="0;1" keySplines="0 0 .58 1" fill="freeze" />
          <animate id="ob-r-step-2" attributeName="cx" begin="ob-r-step-1.end+0s" dur=".5s" to="120" calcMode="spline" keyTimes="0;1" keySplines=".42 0 1 1" fill="freeze" />
        </circle>
      </svg>
    </template>

    <template v-if="type === 'text-1' || type === 'text-2'">
      <svg viewBox="0 0 1300 300" >
        <symbol :id="textID">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em" :style="{fontFamily:textFontFamily}">
            <slot name="text">Demo</slot>
          </text>
        </symbol>
        <use :xlink:href="'#' + textID" class="text" :style="{stroke:textStroke[0],strokeWidth:textWidth}"></use>
        <use :xlink:href="'#' + textID" class="text" :style="{stroke:textStroke[1],strokeWidth:textWidth}"></use>
        <use :xlink:href="'#' + textID" class="text" :style="{stroke:textStroke[2],strokeWidth:textWidth}"></use>
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
      default: 'ball-1'
    },
    textStroke: {
      type: Array,
      required: false,
      default: ['#41b883', '#35495e', '#dcdcdc']
    },
    textWidth: {
      type: String,
      default: '5'
    },
    textFontFamily: {
      type: String,
      default: '"Baloo Tamma", cursive'
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    },
    textID () {
      return Math.random().toString(10).substr(2)
    }
  }
}
</script>
