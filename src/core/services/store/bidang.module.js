import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const GET_BIDANG = "getBidang";
export const UPDATE_BIDANG = "updateBidang";
export const CREATE_BIDANG = "createBidang";
export const DELETE_BIDANG = "deleteBidang";

// mutation types
export const SET_BIDANG = "setBidang";
export const ADD_BIDANG = "addBidang";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  bidang: []
};
const getters = {
  getBidang(state) {
    return state.bidang;
  }
};
const actions = {
  [GET_BIDANG](context, filter) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.query("bidang", { params: filter })
        .then(({ data }) => {
          context.commit(SET_BIDANG, data.data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(SET_ERROR);
    }
  },
  [CREATE_BIDANG](context, bidang) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("bidang/add", bidang)
        .then(({ data }) => {
          context.commit(ADD_BIDANG, data.data);
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
  [SET_BIDANG](state, bidang) {
    state.bidang = bidang;
  },
  [ADD_BIDANG](state, bidang) {
    state.bidang.push(bidang);
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
