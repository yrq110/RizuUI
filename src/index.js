import Anima from './components/anima'
import Button from './components/button'
import Card from './components/card'
// import Carousel from './components/carousel'
import Hint from './components/hint'
import Nav from './components/navigation'
import Scroller from './components/scroller'

const rizu = {
  Anima,
  Button,
  Card,
  // Carousel,
  Hint,
  Nav,
  Scroller
}

const install = function (Vue, opts = {}) {
  Object.keys(rizu).forEach((key) => {
    Vue.component(key, rizu[key])
    console.log('key')
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(rizu, {install})

// module.exports = rizuui  // eslint-disable-line no-undef
