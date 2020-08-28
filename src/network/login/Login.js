import { Request } from "../Request";

export function login(phone, password) {
  return Request({
    url: "/login/cellphone",
    params: {
      phone,
      password,
    },
  });
}

export function subcount() {
  return Request({
    url: "/user/subcount",
    params: {},
  });
}

export function refresh() {
  return Request({
    url: "/login/refresh",
    params: {},
  });
}

export function exit() {
  return Request({
    url: "/logout",
    params: {},
  });
}
