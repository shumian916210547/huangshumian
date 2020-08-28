import Vue from "vue";
import VueRouter from "vue-router";
const customPush = VueRouter.prototype.push;

const Find = () => import("views/find/Find");
const songList = () => import("components/scroller/songList");
const Station = () => import('components/scroller/Station')
const ListDetails = () => import('components/listDetails/ListDetails')

const My = () => import("views/my/My");
const Login = () => import("views/loginPage/Login");
const Forget = () => import("views/loginPage/forget/Forget");

Vue.use(VueRouter);
VueRouter.prototype.push = function (payload) {
  return customPush.call(this, payload).catch((err) => err);
};

const routes = [{
    path: "/",
    redirect: "/find",
  },
  {
    path: "/find",
    component: Find,
  },
  {
    path: "/songlist",
    component: songList,
  },
  {
    path: '/station',
    component: Station,
  },
  {
    path: "/my",
    component: My,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forget",
    component: Forget,
  },
  {
    path: '/listdetails',
    component: ListDetails,
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;