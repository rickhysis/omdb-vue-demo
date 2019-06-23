import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import common from './modules/common'
import movies from './modules/movies'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    common,
    movies
  },
  plugins: [vuexLocal.plugin]
})
