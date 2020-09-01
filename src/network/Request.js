import axios from "axios";
import Vue from "vue";
import ViewUI from 'view-design';
Vue.use(ViewUI);

export function Request(config) {
  const instance = axios.create({
    baseURL: "http://118.178.188.14:3000",
    timeout: "5000",
    withCredentials: true,
  });

  //请求拦截
  instance.interceptors.request.use(
    (config) => {
      ViewUI.LoadingBar.start();
      if (window.sessionStorage.getItem("cookie")) {
        config.headers["demo"] = window.sessionStorage.getItem("cookie")
      }
      return config;
    },
    (err) => {
      console.log("err");
    }
  );

  //响应拦截
  instance.interceptors.response.use(
    (res) => {
      ViewUI.LoadingBar.finish();
      return res;
    },
    (err) => {
      console.log(err);
    }
  );
  return instance(config);
}