<template>
  <div :class="classes">
    <template v-if="type == 'ct'">
      <nav>
        <ul>
          <li>
            <a href="../1">
              <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>home</span>
            </a>
          </li>
          <li>
            <a href="">
              <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
              </svg>
              <span>book</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"/>
              </svg>
              <span>music</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
              </svg>
              <span>forum</span>
            </a>
          </li>
        </ul>
      </nav>
    </template>

    <template v-if="type == 'mu'">
      <div class="main">
      </div>
      <div class="nav">
        <nav>
          <div class="cate" v-for="item in items">
            <h2>{{ item.title }}</h2>
            <ul v-for="li in item.lists">
              <li><a href="#">{{li}}</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </template>

    <template v-if="type == 'vc'">
      <div class="vc-nav">
        <nav class="nav">
          <ul class="nav-list">
            <li>
              <div class="nav-menu">
                <div class="menu-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="40%" viewBox="0 0 50 50">
                    <line x1="0" y1="10" x2="50" y2="10" stroke-width="5" stroke="white" />
                    <line x1="0" y1="25" x2="50" y2="25" stroke-width="5" stroke="white" f/>
                    <line x1="0" y1="40" x2="50" y2="40" stroke-width="5" stroke="white" />
                  </svg>
                </div>
                <div class="menu-title">
                  MENU
                </div>
                <div class="menu-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50%" viewBox="0 0 100 50">
                    <polyline class="arrow" points="-5,0 50,25 105,0" stroke-width="5" stroke="#4c2c31" fill="#4c2c31"/>
                  </svg>
                </div>
              </div>
            </li>
            <template v-for="(item, index) in items">
              <li>
                <div class="nav-item">
                  <div class="nav-index">
                    {{ index + 1 }}
                  </div>
                  <div class="nav-title">
                    {{ item.title }}
                  </div>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <polyline points="8,6 14,10 8,14" stroke-width="2" stroke="rgb(241,221,229)" />
                    </svg>
                  </i>
                  <div class="bottom-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50%" viewBox="0 0 100 50">
                      <polyline class="arrow" points="-5,0 50,25 105,0" stroke-width="5" stroke="#4c2c31" fill="white"/>
                    </svg>
                  </div>
                  <div class="tooltip">
                    {{ item.content }}
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </nav>
        <div class="side">
        </div>
      </div>
    </template>

    <template v-if="type == 'nd'">
      <div class="nodai-nav">
        <div class="left-container"></div>
        <div class="right-container">
          <div class="nav-container">
            <div class="nav-title">{{ navdata.title }}</div>
            <div class="nav-subtitle">{{ navdata.subtitle }}</div>
            <template v-for="element in navdata.elements">
            <div class="nav-element">
              <div class="element-cell">
                <div class="element-title" :style="{background: element.color}">
                  <div class="t">
                    {{ element.title }}
                  </div>
                </div>
                <div class="element-content">
                  <div class="c">
                    {{ element.content }}
                  </div>
                </div>
              </div>
              <div class="element-detail">
                <section>
                  <div class="detail-title" :style="{background: element.color}">
                    <h4>{{ element.detail.title}}</h4>
                  </div>
                  <div class="detail-content">
                    <template v-for="section in element.detail.sections">
                      <section>
                        <h5>{{ section.title }}</h5>
                        <p>{{ section.content }}</p>
                      </section>
                    </template>
                  </div>
                </section>
              </div>
            </div>
            </template>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type === 'muu'">
      <div class="mu-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Archive</a></li>
          <li><a href="#">Comment</a></li>
        </ul>
        <span class="des">This is a description</span>
        <span class="bagger">bagger</span>
      </div>
    </template>
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
    },
    items: {
      type: Array,
      default: function () {
        return [
          {
            title: 'FRUIT',
            lists: [
              'apple', 'banana', 'orange', 'peach', 'lemon', 'pear'
            ]
          }
        ]
      }
    },
    navdata: {
      type: Object,
      default: function () {
        return {
          title: 'Lorem ipsum',
          subtitle: 'Lorem ipsum',
          elements: [
            {
              title: 'Lorem',
              content: 'Lorem ipsum dolor sit amet',
              color: '#cf9287',
              detail: {
                title: 'Lorem',
                sections: [
                  {
                    title: 'Lorem',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                  },
                  {
                    title: 'Lorem',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                  },
                  {
                    title: 'Lorem',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                  }
                ]
              }
            },
            {
              title: 'Lorem',
              content: 'Lorem ipsum dolor sit amet',
              color: '#7d85b2',
              detail: {
                title: 'Lorem',
                sections: [
                  {
                    title: 'Lorem',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                  },
                  {
                    title: 'Lorem',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                  },
                  {
                    title: 'Lorem',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                  }
                ]
              }
            }
          ]
        }
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
        break
      case 'muu':
        var pageTop = document.getElementsByClassName('page-top')[0]
        var nav = document.getElementsByClassName('mu-nav')[0]
        var num = nav.offsetTop
        var des = document.getElementsByClassName('des')[0]
        var bagger = document.getElementsByClassName('bagger')[0]
        var timer = null
        window.onscroll = function () {
          var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
          if (scrollTop > num) {
            nav.className = 'mu-nav fixed'
            des.className = 'des none'
            bagger.className = 'bagger display'
            pageTop.className = 'page-top display'
          } else {
            nav.className = 'mu-nav top'
            des.className = 'des display'
            bagger.className = 'des none'
            pageTop.className = 'page-top none'
          }
        }
        pageTop.onclick = function () {
          cancelAnimationFrame(timer)
          timer = requestAnimationFrame(function fn () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            if (scrollTop > 0) {
              window.scrollTo(0, scrollTop - 30)
              timer = requestAnimationFrame(fn)
            } else {
              cancelAnimationFrame(timer)
            }
          })
        }
        break
    }
  }
}
</script>
