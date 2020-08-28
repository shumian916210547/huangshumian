import axios from "axios";

export function Request(config) {
  const instance = axios.create({
    baseURL: "http://192.168.43.29:3000",
    timeout: "5000",
    withCredentials: true,
  });

  //请求拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log("err");
    }
  );

  //响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      console.log(err);
    }
  );
  return instance(config);
}
