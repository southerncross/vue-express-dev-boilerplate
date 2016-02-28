import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Hello from './components/Hello'

Vue.config.debug = true
Vue.use(Router)

const router = new Router()

router.map({
  '/hello': {
    name: 'hello',
    component: Hello
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
