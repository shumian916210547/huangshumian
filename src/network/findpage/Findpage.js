import {
  Request
} from "../Request";

export function getPlaylistSelection() {
  return Request({
    url: "/personalized",
    params: {
      limit: 6,
    },
  });
}

export function getNewSong() {
  return Request({
    url: "/personalized/newsong",
    params: {},
  });
}

export function getSongList() {
  return Request({
    url: "/top/playlist",
    params: {
      limit: 6,
      order: "hot",
    },
  });
}

export function getEverySongs() {
  return Request({
    url: "/recommend/songs",
    params: {},
  });
}

export function getEveryResource() {
  return Request({
    url: "/recommend/resource",
    params: {},
  });
}

export function getCatlist() {
  return Request({
    url: "/playlist/catlist",
    params: {},
  });
}

export function getPlaylist(cat) {
  return Request({
    url: "/top/playlist",
    params: {
      cat,
      limit: "48",
    },
  });
}

export function getBanner() {
  return Request({
    url: "/dj/banner",
    params: {},
  });
}

export function getListDetail(id) {
  return Request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

export function getSongUrl(id) {
  return Request({
    url: "/song/url",
    params: {
      id,
    },
  });
}

export function getSearch(keywords) {
  return Request({
    url: "/cloudsearch",
    params: {
      keywords,
    },
  });
}