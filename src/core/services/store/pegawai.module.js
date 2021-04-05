import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const GET_PEGAWAI = "getPegwai";
export const UPDATE_PEGAWAI = "updatePegawai";
export const CREATE_PEGAWAI = "createPegawai";
export const DELETE_PEGAWAI = "deletePegawai";

// mutation types
export const SET_PEGAWAI = "setPegawai";
export const ADD_PEGAWAI = "addPegawai";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  pegawai: []
};
const getters = {
  getPegawai(state) {
    return state.pegawai;
  }
};
const actions = {
  [GET_PEGAWAI](context, filter) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("user", filter)
        .then(({ data }) => {
          context.commit(SET_PEGAWAI, data.data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(SET_ERROR);
    }
  },
  [CREATE_PEGAWAI](context, data) {
    console.log(data);
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("user/add", data)
        .then(({ data }) => {
          context.commit(SET_PEGAWAI, data.data);
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
  [SET_PEGAWAI](state, pegawai) {
    state.pegawai = pegawai;
  },
  [ADD_PEGAWAI](state, pegawai) {
    state.pegawai.push(pegawai);
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
