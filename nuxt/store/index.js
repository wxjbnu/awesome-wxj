import Vuex from 'vuex'

// import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 11
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
