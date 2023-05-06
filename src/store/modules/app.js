export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true
  }),
  mutations: {
    triggerSidebar(state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  },
  actions: {},
}