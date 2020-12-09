import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// Components
import App from './App.vue'
import Main from './components/MainComponent.vue'
import UsersList from './components/dashboard/UsersComponent.vue'
import ShowUser from './components/dashboard/ShowUserComponent.vue'

// Vuex
import state from './store/state'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/',  component: Main },
  { path: '/users', component: UsersList },
  { path: '/users/:id', component: ShowUser }
]

const router = new VueRouter({routes})

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

new Vue({
  mode:'history',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
