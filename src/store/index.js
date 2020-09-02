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
    music_id: window.sessionStorage.getItem("music_id"),
    author: window.sessionStorage.getItem("author"),
    songname: window.sessionStorage.getItem("songname"),
    songurl: window.sessionStorage.getItem("songurl"),
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
    set_music_id: (state, data) => {
      state.music_id = data;
      window.sessionStorage.setItem("music_id", data);
    },
    set_author: (state, data) => {
      state.author = data;
      window.sessionStorage.setItem("author", data);
    },
    set_songurl: (state, data) => {
      state.songurl = data;
      window.sessionStorage.setItem("songurl", data);
    },
    set_songname: (state, data) => {
      state.songname = data;
      window.sessionStorage.setItem("songname", data);
    },
  },
  actions: {},
  modules: {},
});