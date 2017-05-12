<template>
  <div :class="classes">

    <div v-if="type == 'mf'">
      <div class="card-image">
        <div class="img"></div>
      </div>
      <div class="card-content">
        <div class="title">
          <slot name="card-title">#title</slot>
        </div>
        <div class="para">
          <slot name="card-content">#content</slot>
        </div>
      </div>
      <div class="card-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
          <polyline points="30,18 42,30 30,42" stroke-width="3" stroke="rgb(241,221,229)" />
          <line x1="18" y1="30" x2="42" y2="30" stroke-width="3" stroke="rgb(241,221,229)" />
        </svg>
      </div>
    </div>

    <div v-if="type == 'ko'">
      <div class="ko-content">
        <span class="ko-category">
          <slot name="card-category">#category</slot>
        </span>
        <div class="ko-pic"></div>
        <div class="ko-contents">
          <h3 class="contents-title">
            <slot name="card-title">#title</slot>
          </h3>
          <div class="contents-intro">
            <slot name="card-content">#content</slot>
          </div>
        </div>
      </div>
    </div>

    <div v-if="type == 'gh'">
      <div class="text">
        <span class="txt1">H</span>
        <span class="txt2">E</span>
        <span class="txt3">L</span>
        <span class="txt4">L</span>
        <span class="txt5">O</span>
        <span class="txt6">!</span>
      </div>
      <div class="pic-source">
      </div>
    </div>
  </div>
</template>

<script>
const prefixCls = 'rz-card'
export default {
  name: 'Card',
  props: {
    type: {
      type: String,
      required: false,
      default: 'mf'
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    }
  }
}
</script>
