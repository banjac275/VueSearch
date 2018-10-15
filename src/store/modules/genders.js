const state = {
  genders: [
    {"id": 1, "name": "Above 70% females"},
    {"id": 2, "name": "Above 60% females"},
    {"id": 3, "name": "Above 50% females"},
    {"id": 4, "name": "Above 70% males"},
    {"id": 5, "name": "Above 60% males"},
    {"id": 6, "name": "Above 50% males"}
  ]
}

const getters = {
  getGenders: state => {
    return state.genders
  }
}

const mutations = {

}

const actions = {

}

export default {
  state,
  actions,
  mutations,
  getters
}