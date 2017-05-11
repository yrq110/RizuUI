<template>
  <div :class="classes">

    <nav v-if="type == 'ct'">
      <ul>
        <li>
          <a href="#">
            <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <span>home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
            </svg>
            <span>book</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"/>
            </svg>
            <span>music</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
            </svg>
            <span>forum</span>
          </a>
        </li>
      </ul>
    </nav>

    <div v-if="type == 'mu'">
      <div class="main">
      </div>
      <div class="nav">
        <nav>
          <div class="cate">
            <h2>FRUIT</h2>
            <ul>
              <li><a href="#">apple</a></li>
              <li><a href="#">banana</a></li>
              <li><a href="#">orange</a></li>
              <li><a href="#">peach</a></li>
              <li><a href="#">lemon</a></li>
              <li><a href="#">pear</a></li>
              <li><a href="#">grape</a></li>
            </ul>
          </div>
          <div class="cate">
            <h2>FRUIT</h2>
            <ul>
              <li><a href="#">apple</a></li>
              <li><a href="#">banana</a></li>
              <li><a href="#">orange</a></li>
              <li><a href="#">peach</a></li>
              <li><a href="#">lemon</a></li>
              <li><a href="#">pear</a></li>
              <li><a href="#">grape</a></li>
            </ul>
          </div>
          <div class="cate">
            <h2>FRUIT</h2>
            <ul>
              <li><a href="#">apple</a></li>
              <li><a href="#">banana</a></li>
              <li><a href="#">orange</a></li>
              <li><a href="#">peach</a></li>
              <li><a href="#">lemon</a></li>
              <li><a href="#">pear</a></li>
              <li><a href="#">grape</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
const prefixCls = 'rz-nav'
export default {
  name: 'Nav',
  props: {
    type: {
      type: String,
      required: false,
      default: 'ct'
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    }
  },
  mounted () {
    switch (this.type) {
      case 'ct':
        var span = document.querySelectorAll('.rz-nav-ct span')
        var ul = document.querySelector('.rz-nav-ct ul')

        ul.onmouseenter = function () {
          for (var i = 0; i < span.length; i++) {
            span[i].className = 'span-in'
          }
        }

        ul.onmouseleave = function () {
          for (var i = 0; i < span.length; i++) {
            span[i].className = 'span-out'
          }
        }
        break
      case 'mu':
        var cate = document.querySelector('.rz-nav-mu cate')
        var main = document.querySelector('.rz-nav-mu main')
        cate.onmouseenter = function () {
          main.className += ' ' + 'blur'
        }
        cate.onmouseleave = function () {
          main.className = 'main'
        }

    }
  }
}
</script>
