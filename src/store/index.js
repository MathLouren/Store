import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexProduto: "1"
  },
  mutations: {
    changeIndex(state, payload){
      state.indexProduto = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
