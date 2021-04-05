import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const GET_ORGANISASI = "getOrganisasi";
export const UPDATE_ORGANISASI = "updateOrganisasi";
export const CREATE_ORGANISASI = "createOrganisasi";
export const DELETE_ORGANISASI = "deleteOrganisasi";

// mutation types
export const SET_ORGANISASI = "setOrganisasi";
export const ADD_ORGANISASI = "addOrganisasi";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  organisasi: []
};
const getters = {
  getOrganisasi(state) {
    return state.organisasi;
  }
};
const actions = {
  [GET_ORGANISASI](context, filter) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("organisasi", filter)
        .then(({ data }) => {
          context.commit(SET_ORGANISASI, data.data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(SET_ERROR);
    }
  },
  [CREATE_ORGANISASI](context, organisasi) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("organisasi/add", organisasi)
        .then(({ data }) => {
          context.commit(ADD_ORGANISASI, data.data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(SET_ERROR);
    }
  }
};
const mutations = {
  [SET_ORGANISASI](state, organisasi) {
    state.organisasi = organisasi;
  },
  [ADD_ORGANISASI](state, organisasi) {
    state.organisasi.push(organisasi);
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
