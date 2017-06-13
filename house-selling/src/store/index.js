import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // define the data structure of your application
    houses: []
  },
  actions: { // define the calls that will commit changes to your store
    getHouses: function (store) {
      axios.get('http://localhost:3000/houses')
        .then((response) => {
          console.log(response.data)
          store.state.houses = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mutations: { // the only place that the store can be updated
  },
  getters: { // a way to grab computed data from the store
    getHouses: state => {
      return state.houses
    }
  },
  modules: {
  }
})

export default store
