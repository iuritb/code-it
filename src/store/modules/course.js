export default {
  namespaced: true,
  state: {
    courses: [],
    course: {}
  },
  getters: {
    getSelectedGroup(state) {
      return state.selectedGroup
    },
    getUserGroups(state) {
      return state.userGroups
    },
    getInsertUserGroups(state) {
      return state.insertUserGroups
    }
  },
  mutations: {
    mutationInsertUserGroups(state, payload) {
      state.userGroups = payload
    },
    mutationSelectedGroup(state, payload) {
      state.selectedGroup = payload
    },
    mutationUpdateSelectedGroup(state, payload) {
      state.selectedGroup = payload
    }
  },
  actions: {
    insertUserGroups({ commit }, payload) {
      if (payload.length == 1) {
        commit('mutationSelectedGroup', payload[0])
      }
      else if (payload.length == 0) {
        commit('mutationSelectedGroup', {
          acl: { id: "PAR", name: "participante de grupo" },
          id: "0101",
          logo: "/img/group-icon.726950f7.png",
          name: "S/ Vinculação à grupos"
        })
      }
      commit('mutationInsertUserGroups', payload)
    },
    selectGroup({ commit }, payload) {
      commit('mutationSelectedGroup', payload)
    },
    updateSelectedGroup({ commit }, payload) {
      commit('mutationUpdateSelectedGroup', payload)
    }
  }
}