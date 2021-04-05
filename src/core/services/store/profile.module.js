// action types
export const UPDATE_PERSONAL_INFO = "updateUserPersonalInfo";
export const UPDATE_ACCOUNT_INFO = "updateUserAccountInfo";

// mutation types
export const SET_PERSONAL_INFO = "setPersonalInfo";
export const SET_ACCOUNT_INFO = "setAccountInfo";

const state = {
  user_personal_info: {
    photo: "media/users/300_21.jpg",
    name: null,
    pangkat: null,
    golongan: null,
    jabatan: null,
    email: null
  },
  user_account_info: {
    email: null
  }
};

const getters = {
  currentUserPersonalInfo(state) {
    return state.user_personal_info;
  },

  currentUserAccountInfo(state) {
    return state.user_account_info;
  },

  currentUserPhoto(state) {
    return state.user_personal_info.photo;
  }
};

const actions = {
  [UPDATE_PERSONAL_INFO](context, payload) {
    context.commit(SET_PERSONAL_INFO, payload);
  },
  [UPDATE_ACCOUNT_INFO](context, payload) {
    context.commit(SET_ACCOUNT_INFO, payload);
  }
};

const mutations = {
  [SET_PERSONAL_INFO](state, user_personal_info) {
    state.user_personal_info = {
      photo: "media/users/300_21.jpg",
      name: user_personal_info.name,
      pangkat: user_personal_info.pangkat,
      golongan: user_personal_info.golongan,
      jabatan: user_personal_info.jabatan,
      email: user_personal_info.email
    };
  },
  [SET_ACCOUNT_INFO](state, user_account_info) {
    state.user_account_info = {
      email: user_account_info.email
    };
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
