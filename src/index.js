import Anima from './components/anima'
import Button from './components/button'
import Card from './components/card'
import Hint from './components/hint'
import Nav from './components/navigation'
import Scroller from './components/scroller'

const rizu = {
  Anima,
  Button,
  Card,
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

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(rizu, {install})
