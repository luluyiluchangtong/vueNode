import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: "this is a message",
    number: 123
  },
  getters: {
    getMsg: state => {
      return state.message.substr(4)
    }
  },
  mutations: {
    stringToUpCase(state, platform) {
      state.message = state.message.toUpperCase()
    },
    addNum(state, platform) {
      state.number += platform.amount
    }
  },
  actions: {
    AsyncAddNum({
      commit
    }) {
      setTimeout(() => {
        commit('addNum', {
          amount: 34
        })
      }, 3000)
    }
  }
})


// import state from './state'
// import mutations from './mutations'
// import getters from './getters'
// import actions from './actions'

// export default new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions
// })