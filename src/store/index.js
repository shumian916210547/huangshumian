import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    nickname: window.sessionStorage.getItem("nickname"),
    cookie: window.sessionStorage.getItem("cookie"),
    city: window.sessionStorage.getItem("city"),
    token: window.sessionStorage.getItem("token"),
    avatarUrl: window.sessionStorage.getItem("avatarUrl"),
    songlistid: window.sessionStorage.getItem("songlistid"),
    music_src: window.sessionStorage.getItem("music_src"),
  },
  mutations: {
    set_nickname: (state, data) => {
      state.nickname = data;
      window.sessionStorage.setItem("nickname", data);
    },
    set_city: (state, data) => {
      state.city = data;
      window.sessionStorage.setItem("city", data);
    },
    set_token: (state, data) => {
      state.token = data;
      window.sessionStorage.setItem("token", data);
    },
    set_cookie: (state, data) => {
      state.cookie = data;
      window.sessionStorage.setItem("cookie", data);
    },
    set_avatarUrl: (state, data) => {
      state.avatarUrl = data;
      window.sessionStorage.setItem("avatarUrl", data);
    },
    set_songlistid: (state, data) => {
      state.songlistid = data;
      window.sessionStorage.setItem("songlistid", data);
    },
    set_music_src: (state, data) => {
      state.music_src = data;
      window.sessionStorage.setItem("music_src", data);
    },
  },
  actions: {},
  modules: {},
});