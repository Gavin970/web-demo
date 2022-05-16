import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
  // increment: function (context, value) {
  //   // console.log('action中的increment被调用了', context, value)
  //   context.commit('INCREMENT', value)
  // },
  // decrement(context, value){
  //   context.commit('DECREMENT', value)
  // },
  incrementOdd: function (context, value) {
    if (context.state.sum % 2) {
      context.commit('INCREMENT', value)
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit('INCREMENT', value)
    }, 500);
  },
}
const mutations = {
  INCREMENT: function (state, value) {
    // console.log('mutations中的INCREMENT被调用了', state, value)
    state.sum += value
  },
  DECREMENT(state, value) {
    state.sum -= value
  },
}
const state = {
  sum: 0,
  grade: '五年级',
  subject: '数学'
}

const getters = {
  bigSum: function (state) {
    return state.sum * 10
  }
}

export default new Vuex.Store({
  actions: actions,
  mutations: mutations,
  state,
  getters
})