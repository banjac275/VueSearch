import Vue from 'vue'
import Vuex from 'vuex'
import itemValues from './modules/itemValues'
import ageGroups from './modules/ageGroups'
import genders from './modules/genders'
import dimensions from './modules/dimensions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    namespaced: true,
    itemValues,
    ageGroups,
    genders,
    dimensions
  }
})
