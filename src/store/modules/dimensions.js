const state = {
  dimensions: [
    {"id": 1, "name": "Campaign", "display": "input"},
    {"id": 2, "name": "Ad Unit", "display": "input"},
    {"id": 3, "name": "Gender", "display": "select"},
    {"id": 4, "name": "Spent", "display": "range"},
    {"id": 5, "name": "Age group", "display": "select"},
    {"id": 6, "name": "Brand", "display": "select"},
    {"id": 7, "name": "BrandCategory", "display": "select"},
    {"id": 8, "name": "BrandSubcategory", "display": "select"}
  ]
}

const getters = {
  getDimensions: state => {
    return state.dimensions
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