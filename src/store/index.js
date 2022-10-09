import { createStore } from "vuex";

export default createStore({
  state: {
    invoiceModel: null,
    modelActive: null,
  },
  getters: {},
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModel = !state.invoiceModel;
    },
    TOGGLE_MODEL(state) {
      state.modelActive = !state.modelActive;
    },
  },
  actions: {},
  modules: {},
});
