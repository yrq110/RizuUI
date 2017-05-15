<template>
  <div :class="classes">
    <template v-if="type == 'ntd'">
      <div class="nin-scroller">
        <div class="scroller-wrap" draggable="false">
          <template v-for="item in items">
            <div class="scroller-item">
              <div class="item-thumb"></div>
              <div class="item-label">{{ item.label }}</div>
              <div class="item-title">{{ item.title }}</div>
              <div class="item-sub">{{ item.sub }}</div>
            </div>
        </template>
        </div>
        <div class="nin-pager">
          <div class="pager-prev pager-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" stroke="red"
      stroke-width="3" fill="white"/>
              <polyline id="pl" points="30,15 20,25 30,35" stroke-width="3" stroke="red" fill="white"/>
            </svg>
          </div>
          <div class="pager-bar">
            <div class="bar-slide">
              <div class="bar-switch">
                <p class="switch-text">{{ switch_text }}</p>
              </div>
            </div>
            <div class="bar-sections">
            </div>
          </div>
          <div class="pager-next pager-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" stroke="red"
      stroke-width="3" fill="white"/>
              <polyline id="pl" points="20,15 30,25 20,35" stroke-width="3" stroke="red" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
const prefixCls = 'rz-srl'

export default {
  name: 'Scroller',
  props: {
    type: {
      type: String,
      required: false,
      default: 'ntd'
    },
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: 'Label',
            title: 'Title',
            sub: 'Sub'
          },
          {
            label: 'Label',
            title: 'Title',
            sub: 'Sub'
          },
          {
            label: 'Label',
            title: 'Title',
            sub: 'Sub'
          },
          {
            label: 'Label',
            title: 'Title',
            sub: 'Sub'
          },
          {
            label: 'Label',
            title: 'Title',
            sub: 'Sub'
          }
        ]
      }
    },
    switch_text: {
      type: String,
      default: function () {
        return 'Text'
      }
    }
  },
  computed: {
    classes () {
      return `${prefixCls}-${this.type}`
    }
  },
  mounted () {
    switch (this.type) {
      case 'ntd':
        var wrap = document.querySelector('.scroller-wrap')
        var wrapWidth = wrap.offsetWidth
        var pagerBar = document.querySelector('.pager-bar')
        var barSlide = document.querySelector('.bar-slide')
        var slideMaxLeft = 270
        var isSlideEnter = false
        var pagerPrev = document.querySelector('.pager-prev')
        var pagerNext = document.querySelector('.pager-next')
        var x1 = 0
        var x2 = 0
        wrap.addEventListener('mousedown', function () {
          console.log('hello')
        })
        wrap.onmousedown = function (event) {
          x1 = event.clientX
          var left = wrap.scrollLeft
          wrap.onmousemove = function (e) {
            x2 = e.clientX - x1
            wrap.scrollLeft = left - x2
            var barLeft = (left - x2) / wrapWidth * slideMaxLeft > 0 ? (left - x2) / wrapWidth * slideMaxLeft : 0
            barLeft = barLeft < 270 ? barLeft : 270
            barSlide.style.marginLeft = barLeft + 'px'
          }
        }

        wrap.onmouseup = function (e) {
          x2 = 0
          wrap.onmousemove = null
        }

        wrap.onmouseleave = function (e) {
          x2 = 0
          wrap.onmousemove = null
        }

        pagerBar.onmousedown = function (e) {
          if (!isSlideEnter) {
            if (e.offsetX !== 0) {
              if (e.offsetX > slideMaxLeft) {
                barSlide.style.marginLeft = slideMaxLeft + 'px'
              } else {
                barSlide.style.marginLeft = e.offsetX + 'px'
                wrap.scrollLeft = e.offsetX / slideMaxLeft * wrapWidth
              }
            }
          }
        }

        barSlide.onmouseenter = function (e) {
          isSlideEnter = true
        }

        var slideLeft = 0
        barSlide.onmousedown = function (e) {
          var b1 = e.offsetX
          barSlide.onmousemove = function (e) {
            var b2 = e.offsetX - b1
            slideLeft = parseInt(barSlide.style.marginLeft.split('px')[0]) + b2
            var slideLeft = slideLeft > 0 ? slideLeft : 0
            slideLeft = slideLeft < 270 ? slideLeft : 270
            barSlide.style.marginLeft = slideLeft + 'px'
            wrap.scrollLeft = slideLeft / slideMaxLeft * wrapWidth
          }
        }

        barSlide.onmouseup = function (e) {
          barSlide.onmousemove = null
        }

        barSlide.onmouseleave = function (e) {
          barSlide.onmousemove = null
          isSlideEnter = false
        }

        pagerPrev.onclick = function (e) {
          if (barSlide.style.marginLeft === '') {
            slideLeft = 0
          } else {
            slideLeft = parseInt(barSlide.style.marginLeft.split('px')[0]) - 50
            slideLeft = slideLeft < 0 ? 0 : slideLeft
          }
          barSlide.style.marginLeft = slideLeft + 'px'
          wrap.scrollLeft = slideLeft / slideMaxLeft * wrapWidth
        }

        pagerNext.onclick = function (e) {
          if (barSlide.style.marginLeft === '') {
            slideLeft = 50
          } else {
            slideLeft = parseInt(barSlide.style.marginLeft.split('px')[0]) + 50
            slideLeft = slideLeft < 270 ? slideLeft : 270
          }
          barSlide.style.marginLeft = slideLeft + 'px'
          wrap.scrollLeft = slideLeft / slideMaxLeft * wrapWidth
        }

        break
    }
  }
}
</script>
