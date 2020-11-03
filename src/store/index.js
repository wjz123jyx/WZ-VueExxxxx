import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const getters = {}


import home from './home'
import search from './search'
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        search
    }
})