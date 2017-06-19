<template>
  <div :class="classes">
    <template v-if="type === 'mf'">
      <div class="card-image">
        <div class="img" :style="{backgroundImage: 'url('+ img + ')'}"></div>
      </div>
      <div class="card-content">
        <div class="card-title">
          <slot name="card-title">#title</slot>
        </div>
        <div class="para">
          <slot name="card-content">#content</slot>
        </div>
      </div>
      <div class="card-button">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <polyline points="30,18 42,30 30,42" stroke-width="3" stroke="rgb(241,221,229)" />
          <line x1="18" y1="30" x2="42" y2="30" stroke-width="3" stroke="rgb(241,221,229)" />
        </svg>
      </div>
    </template>

    <template v-if="type === 'ko'">
      <div class="card-content">
        <span class="category">
          <slot name="card-category">#category</slot>
        </span>
        <div class="image" :style="{backgroundImage: 'url('+ img + ')'}"></div>
        <div class="contents">
          <h3 class="contents-title">
            <slot name="card-title">#title</slot>
          </h3>
          <div class="contents-intro">
            <slot name="card-content">#content</slot>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type === 'gh'">
      <div class="card-content" :style="{backgroundImage: 'url('+ img + ')'}">
        <div class="text">
          <span class="txt1">H</span>
          <span class="txt2">E</span>
          <span class="txt3">L</span>
          <span class="txt4">L</span>
          <span class="txt5">O</span>
          <span class="txt6">!</span>
        </div>
      </div>
    </template>

    <template v-if="type === 'cc'">
      <div class="container">
        <div class="image">
          <div class="img" :style="{backgroundImage: 'url('+ img + ')'}"></div>
          <div class="icon">
            <svg width="70" height="70" viewBox="0 0 60 60">
              <line x1="18" y1="30" x2="42" y2="30" stroke-width="3" stroke="rgb(241,221,229)" />
              <line x1="30" y1="18" x2="30" y2="42" stroke-width="3" stroke="rgb(241,221,229)" />
            </svg>
          </div>
        </div>
        <div class="card-content">
          <h5>
            <slot name="card-title">#title</slot>
          </h5>
          <p>
            <slot name="card-content">#content</slot>
          </p>
          <div class="btn">
            <span class="icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <polyline points="30,18 42,30 30,42" stroke-width="3" stroke="rgb(241,221,229)" fill="#ff8c85"/>
                <line x1="18" y1="30" x2="42" y2="30" stroke-width="3" stroke="rgb(241,221,229)" />
              </svg>
            </span>
            <span class="label">
              <span class="text">
                <slot name="card-btn">#btn</slot>
              </span>
            </span>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type === 'gh-2'">
      <img :src='img2' alt="">
      <div class="overlay">
        <div class="caption">Hello world</div>
      </div>
    </template>

    <template v-if="type === 'kz'">
      <div class="container" :style="{backgroundImage: 'url('+ img + ')'}">
        <div class="card-title">
          <slot name="card-title">#title</slot>
        </div>
        <div class="card-content">
          <slot name="card-content">#content</slot>
        </div>
        <span class="icon">
          <svg width="40" height="40" viewBox="0 0 60 60">
            <polyline points="30,18 42,30 30,42" stroke-width="3" stroke="rgb(241,221,229)" fill="none"/>
          </svg>
        </span>
      </div>
    </template>

    <template v-if="type === 'md'">
      <div class="image" :style="{backgroundImage: 'url('+ img + ')'}">
      </div>
      <div class="overlay">
        <div class="card-title">
          <slot name="card-title">#title</slot>
        </div>
        <div class="card-content">
          <slot name="card-content">#content</slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
const prefixCls = 'rz-card'
export default {
  name: 'RzCard',
  props: {
    type: {
      type: String,
      default: 'mf'
    },
    img: {
      type: String,
      default: 'http://opctl018t.bkt.clouddn.com/dva.jpg'
    },
    img2: {
      type: String,
      default: 'http://opctl018t.bkt.clouddn.com/hori.jpg'
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    }
  }
}
</script>
