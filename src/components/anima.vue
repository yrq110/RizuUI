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

    <template v-if="type === 'ball-4'">
      <svg width="100" height="100" viewBox="0 0 20 20">
        <circle id="big" cx="10" cy="10" r="10" fill="black">
          <animate id="big_min" attributeName="r" from="10" to="5" calcMode="spline" keyTimes="0;1" keySplines=".44 0 .76 .56" begin="0s;big_max.end" dur=".5s" fill="freeze"/>
          <animate id="big_max" attributeName="r" from="5" to="10" calcMode="spline" keyTimes="0;1" keySplines="0 .44 .56 .76" begin="big_min.end" dur=".5s" fill="freeze"/>
        </circle>
        <circle id="small" cx="10" cy="10" r="0" fill="grey">
          <animate id="small_max" attributeName="r" from="0" to="6" calcMode="spline" keyTimes="0;1" keySplines=".44 0 .76 .56" begin="0s;small_min.end" dur=".5s" fill="freeze"/>
          <animate id="small_min" attributeName="r" from="6" to="0" calcMode="spline" keyTimes="0;1" keySplines="0 .44 .56 .76" begin="small_max.end" dur=".5s" fill="freeze"/>
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

    <template v-if="type === 'rect-1'">
      <svg width="110" height="110" viewBox="0 0 110 110">
        <g>
          <rect x="0" y="0" width="30" height="30">
            <animate id="x11" attributeName="x" begin="0s;x11.end+1s" dur="1s" values="0;15;0"/>
            <animate id="y11" attributeName="y" begin="0s;y11.end+1s" dur="1s" values="0;15;0"/>
            <animate id="w1" attributeName="width" begin="0s;w1.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h1" attributeName="height" begin="0s;h1.end+1s" dur="1s" values="30;0;30"/>
          </rect>
          <rect x="0" y="40" width="30" height="30">
            <animate id="x21" attributeName="x" begin="0s;x21.end+1s" dur="1s" values="0;15;0"/>
            <animate id="y21" attributeName="y" begin="0s;y21.end+1s" dur="1s" values="40;55;40"/>
            <animate id="w1" attributeName="width" begin="0s;w1.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h1" attributeName="height" begin="0s;h1.end+1s" dur="1s" values="30;0;30"/>
          </rect>
          <rect x="0" y="80" width="30" height="30">
            <animate id="x31" attributeName="x" begin="0s;x31.end+1s" dur="1s" values="0;15;0"/>
            <animate id="y31" attributeName="y" begin="0s;y31.end+1s" dur="1s" values="80;95;80"/>
            <animate id="w1" attributeName="width" begin="0s;w1.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h1" attributeName="height" begin="0s;h1.end+1s" dur="1s" values="30;0;30"/>
          </rect>
        </g>
        <g>
          <rect x="40" y="0" width="30" height="30">
            <animate id="x12" attributeName="x" begin=".3s;x12.end+1s" dur="1s" values="40;55;40"/>
            <animate id="y12" attributeName="y" begin=".3s;y12.end+1s" dur="1s" values="0;15;0"/>
            <animate id="w2" attributeName="width" begin=".3s;w2.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h2" attributeName="height" begin=".3s;h2.end+1s" dur="1s" values="30;0;30"/>
          </rect>
          <rect x="40" y="40" width="30" height="30">
            <animate id="x22" attributeName="x" begin=".3s;x22.end+1s" dur="1s" values="40;55;40"/>
            <animate id="y22" attributeName="y" begin=".3s;y22.end+1s" dur="1s" values="40;55;40" />
            <animate id="w2" attributeName="width" begin=".3s;w2.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h2" attributeName="height" begin=".3s;h2.end+1s" dur="1s" values="30;0;30"/>
          </rect>
          <rect x="40" y="80" width="30" height="30">
            <animate id="x32" attributeName="x" begin=".3s;x32.end+1s" dur="1s" values="40;55;40"/>
            <animate id="y32" attributeName="y" begin=".3s;y32.end+1s" dur="1s" values="80;95;80"/>
            <animate id="w2" attributeName="width" begin=".3s;w2.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h2" attributeName="height" begin=".3s;h2.end+1s" dur="1s" values="30;0;30"/>
          </rect>
        </g>
        <g>
          <rect x="80" y="0" width="30" height="30">
            <animate id="x13" attributeName="x" begin=".6s;x13.end+1s" dur="1s" values="80;95;80" />
            <animate id="y13" attributeName="y" begin=".6s;y13.end+1s" dur="1s" values="0;15;0"/>
            <animate id="w3" attributeName="width" begin=".6s;w3.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h3" attributeName="height" begin=".6s;h3.end+1s" dur="1s" values="30;0;30"/>
          </rect>
          <rect x="80" y="40" width="30" height="30">
            <animate id="x23" attributeName="x" begin=".6s;x23.end+1s" dur="1s" values="80;95;80"/>
            <animate id="y23" attributeName="y" begin=".6s;y23.end+1s" dur="1s" values="40;55;40"/>
            <animate id="w3" attributeName="width" begin=".6s;w3.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h3" attributeName="height" begin=".6s;h3.end+1s" dur="1s" values="30;0;30"/>
          </rect>
          <rect x="80" y="80" width="30" height="30">
            <animate id="x33" attributeName="x" begin=".6s;x33.end+1s" dur="1s" values="80;95;80"/>
            <animate id="y33" attributeName="y" begin=".6s;y33.end+1s" dur="1s" values="80;95;80"/>
            <animate id="w3" attributeName="width" begin=".6s;w3.end+1s" dur="1s" values="30;0;30"/>
            <animate id="h3" attributeName="height" begin=".6s;h3.end+1s" dur="1s" values="30;0;30"/>
          </rect>
        </g>
      </svg>
    </template>

    <template v-if="type === 'rect-2'">
      <svg width="110" height="110" viewBox="0 0 110 110">
        <rect x="0" y="80" width="30" height="30">
          <animateTransform id="t31" type="translate" attributeName="transform" begin="0s;t31_2.end+2.5s" dur=".3s" from="0 -20" to="0 0" fill="freeze"/>
          <animate id="o31" attributeName="opacity" begin="0s;o31_2.end+2.5s" dur=".3s" from="0" to="1" fill="freeze" />
          <animateTransform id="t31_2" type="translate" attributeName="transform" begin="t31.end+2.5s" dur=".3s" from="0 0" to="0 20" fill="freeze"/>
          <animate id="o31_2" attributeName="opacity" begin="o31.end+2.5s" dur=".3s" from="1" to="0" fill="freeze"/>
        </rect>
        <rect x="40" y="80" width="30" height="30">
          <animateTransform id="t32" type="translate" attributeName="transform" begin=".3s;t32_2.end+2.5s" dur=".3s" from="0 -20" to="0 0" fill="freeze"/>
          <animate id="o32" attributeName="opacity" begin=".3s;o32_2.end+2.5s" dur=".3s" from="0" to="1" fill="freeze"/>
          <animateTransform id="t32_2" type="translate" attributeName="transform" begin="t32.end+2.5s" dur=".3s" from="0 0" to="0 20" fill="freeze"/>
          <animate id="o32_2"
            attributeName="opacity"
            begin="o32.end+2.5s"
            dur=".3s"
            from="1"
            to="0"
            fill="freeze"
          />
        </rect>
        <rect x="80" y="80" width="30" height="30">
          <animateTransform id="t33"
            type="translate"
            attributeName="transform"
            begin=".6s;t33_2.end+2.5s"
            dur=".3s"
            from="0 -20"
            to="0 0"
            fill="freeze"
          />
          <animate id="o33"
            attributeName="opacity"
            begin=".6s;o33_2.end+2.5s"
            dur=".3s"
            from="0"
            to="1"
            fill="freeze"
          />
          <animateTransform id="t33_2"
            type="translate"
            attributeName="transform"
            begin="t33.end+2.5s"
            dur=".3s"
            from="0 0"
            to="0 20"
            fill="freeze"
          />
          <animate id="o33_2"
            attributeName="opacity"
            begin="o33.end+2.5s"
            dur=".3s"
            from="1"
            to="0"
            fill="freeze"
          />
        </rect>
        <rect x="0" y="40" width="30" height="30">
          <animateTransform id="t21"
            type="translate"
            attributeName="transform"
            begin=".9s;t21_2.end+2.5s"
            dur=".3s"
            from="0 -20"
            to="0 0"
            fill="freeze"
          />
          <animate id="o21"
            attributeName="opacity"
            begin=".9s;o21_2.end+2.5s"
            dur=".3s"
            from="0"
            to="1"
            fill="freeze"
          />
          <animateTransform id="t21_2"
            type="translate"
            attributeName="transform"
            begin="t21.end+2.5s"
            dur=".3s"
            from="0 0"
            to="0 20"
            fill="freeze"
          />
          <animate id="o21_2"
            attributeName="opacity"
            begin="o21.end+2.5s"
            dur=".3s"
            from="1"
            to="0"
            fill="freeze"
          />
        </rect>
        <rect x="40" y="40" width="30" height="30">
          <animateTransform id="t22"
            type="translate"
            attributeName="transform"
            begin="1.2s;t22_2.end+2.5s"
            dur=".3s"
            from="0 -20"
            to="0 0"
            fill="freeze"
          />
          <animate id="o22"
            attributeName="opacity"
            begin="1.2s;o22_2.end+2.5s"
            dur=".3s"
            from="0"
            to="1"
            fill="freeze"
          />
          <animateTransform id="t22_2"
            type="translate"
            attributeName="transform"
            begin="t22.end+2.5s"
            dur=".3s"
            from="0 0"
            to="0 20"
            fill="freeze"
          />
          <animate id="o22_2"
            attributeName="opacity"
            begin="o22.end+2.5s"
            dur=".3s"
            from="1"
            to="0"
            fill="freeze"
          />
        </rect>
        <rect x="80" y="40" width="30" height="30">
          <animateTransform id="t23"
            type="translate"
            attributeName="transform"
            begin="1.5s;t23_2.end+2.5s"
            dur=".3s"
            from="0 -20"
            to="0 0"
            fill="freeze"
          />
          <animate id="o23"
            attributeName="opacity"
            begin="1.5s;o23_2.end+2.5s"
            dur=".3s"
            from="0"
            to="1"
            fill="freeze"
          />
          <animateTransform id="t23_2"
            type="translate"
            attributeName="transform"
            begin="t23.end+2.5s"
            dur=".3s"
            from="0 0"
            to="0 20"
            fill="freeze"
          />
          <animate id="o23_2"
            attributeName="opacity"
            begin="o23.end+2.5s"
            dur=".3s"
            from="1"
            to="0"
            fill="freeze"
          />
        </rect>
        <rect x="0" y="0" width="30" height="30">
          <animateTransform id="t11"
            type="translate"
            attributeName="transform"
            begin="1.8s;t11_2.end+2.5s"
            dur=".3s"
            from="0 -20"
            to="0 0"
            fill="freeze"
          />
          <animate id="o11"
            attributeName="opacity"
            begin="1.8s;o11_2.end+2.5s"
            dur=".3s"
            from="0"
            to="1"
            fill="freeze"
          />
          <animateTransform id="t11_2"
            type="translate"
            attributeName="transform"
            begin="t11.end+2.5s"
            dur=".3s"
            from="0 0"
            to="0 20"
            fill="freeze"
          />
          <animate id="o11_2"
            attributeName="opacity"
            begin="o11.end+2.5s" dur=".3s"
            from="1" to="0"
            fill="freeze"
          />
        </rect>
        <rect x="40" y="0" width="30" height="30">
          <animateTransform id="t12"
            type="translate"
            attributeName="transform"
            begin="2.1s;t12_2.end+2.5s" dur=".3s"
            from="0 -20" to="0 0"
            fill="freeze"
          />
          <animate id="o12"
            attributeName="opacity"
            begin="2.1s;o12_2.end+2.5s" dur=".3s"
            from="0" to="1"
            fill="freeze"
          />
          <animateTransform id="t12_2"
            type="translate"
            attributeName="transform"
            begin="t12.end+2.5s" dur=".3s"
            from="0 0" to="0 20"
            fill="freeze"
          />
          <animate id="o12_2"
            attributeName="opacity"
            begin="o12.end+2.5s" dur=".3s"
            from="1" to="0"
            fill="freeze"
          />
        </rect>
        <rect x="80" y="0" width="30" height="30">
          <animateTransform id="t13"
            type="translate"
            attributeName="transform"
            begin="2.4s;t13_2.end+2.5s" dur=".3s"
            from="0 -20" to="0 0"
            fill="freeze"
          />
          <animate id="o13"
            attributeName="opacity"
            begin="2.4s;o13_2.end+2.5s" dur=".3s"
            from="0" to="1"
            fill="freeze"
          />
          <animateTransform id="t13_2"
            type="translate"
            attributeName="transform"
            begin="t13.end+2.5s" dur=".3s"
            from="0 0" to="0 20"
            fill="freeze"
          />
          <animate id="o13_2" attributeName="opacity" begin="o13.end+2.5s"
            dur=".3s" from="1" to="0" fill="freeze"
          />
        </rect>
      </svg>
    </template>
  </div>
</template>

<script>
const prefixCls = 'rz-anima'
export default {
  name: 'RzAnima',
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
