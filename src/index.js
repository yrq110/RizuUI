import RzAnima from './components/anima'
import RzButton from './components/button'
import RzCard from './components/card'
import RzHint from './components/hint'
import RzNav from './components/navigation'
import RzScroller from './components/scroller'
import RzRadio from './components/radio'
import RzCheckbox from './components/checkbox'

const rizu = {
  RzAnima,
  RzButton,
  RzCard,
  RzHint,
  RzNav,
  RzScroller,
  RzRadio,
  RzCheckbox
}

const install = function (Vue, opts = {}) {
  Object.keys(rizu).forEach((key) => {
    Vue.component(key, rizu[key])
    console.log(key)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(rizu, {install})
