import axios from "axios";

export function siteRequest(config) {
  const instance = axios.create({
    method: "get",
    baseURL: "https://restapi.amap.com",
    timeout: "5000",
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

export function getSiteList(keywords) {
  return siteRequest({
    url: "/v3/config/district?parameters",
    params: {
      keywords,
      key: "a900a7380aff2a464cd345022cd9623d",
    },
  });
}
