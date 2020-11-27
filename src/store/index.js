import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addressid:localStorage.getItem('addressid')||'',
    addressid2:localStorage.getItem('addressid2')||'',
  },
  mutations: {
    setAddId(state,value){
      state.addressid=value;
      localStorage.setItem('addressid',value);
    },
    setAddId2(state,value){
      state.addressid2=value;
      localStorage.setItem('addressid2',value);
    }
  },
  actions: {
  },
  modules: {
  }
})
