<template>
  <div :class="classes">

    <div v-if="mf">
      <div class="card-image">
        <div class="img"></div>
      </div>
      <div class="card-content">
        <div class="title">
          Lipsum
        </div>
        <div class="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="card-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
          <polyline points="30,18 42,30 30,42" stroke-width="3" stroke="rgb(241,221,229)" />
          <line x1="18" y1="30" x2="42" y2="30" stroke-width="3" stroke="rgb(241,221,229)" />
        </svg>
      </div>
    </div>

    <div v-if="ko">
      <div class="ko-content">
        <span class="ko-category">#Category</span>
        <div class="ko-pic"></div>
        <div class="ko-contents">
          <h3 class="contents-title">Lorem ipsum</h3>
          <div class="contents-intro">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div style="margin-top: 20px">pic from Ask</div>
        </div>
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
    },
    mf () {
      if (this.type === 'mf') { return true } else { return false }
    },
    ko () {
      if (this.type === 'ko') { return true } else { return false }
    }
  }
}
</script>
