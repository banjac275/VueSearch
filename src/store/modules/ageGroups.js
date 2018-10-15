const state = {
  ageGroups: [
    {"id": 1, "name": "Age 1-17 (GEN Z, CENTENNIALS)"},
    {"id": 2, "name": "Age 18-37 (GEN Y or MILLENNIALS)"},
    {"id": 3, "name": "Age 38-53 (GEN X)"},
    {"id": 4, "name": "Age 54-72 (BABY BOOMERS)"},
    {"id": 5, "name": "Age 73-91 (THE SILENT GENERATION)"},
    {"id": 6, "name": "Age 92+ (THE GREATEST GENERATION)"}
  ]
}

const getters = {
  getAgeGroups: state => {
    return state.ageGroups
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