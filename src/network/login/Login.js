import {
  Request
} from "../Request";

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

export function sendcode(phone) {
  return Request({
    url: "/captcha/sent",
    params: {
      phone,
    },
  });
}

export function verifycode(phone, captcha) {
  return Request({
    url: "/captcha/verify",
    params: {
      phone,
      captcha,
    },
  });
}

export function submit(captcha, phone, password, nickname) {
  return Request({
    url: "/register/cellphone",
    params: {
      captcha,
      phone,
      password,
      nickname
    },
  });
}