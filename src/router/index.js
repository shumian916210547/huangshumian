import Vue from "vue";
import VueRouter from "vue-router";
import ViewUI from 'view-design';
Vue.use(ViewUI);
const customPush = VueRouter.prototype.push;

const Find = () => import("views/find/Find");
const EverydaySongs = () => import("components/scroller/EverydaySongs");
const songList = () => import("components/scroller/songList");
const Station = () => import('components/scroller/Station');
const ListDetails = () => import('components/listDetails/ListDetails');

const My = () => import("views/my/My");
const Login = () => import("views/loginPage/Login");
const Forget = () => import("views/loginPage/forget/Forget");

const Search = () => import("components/search/Search")

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
    path: '/everydaysongs',
    component: EverydaySongs
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
  },
  {
    path: '/search',
    component: Search
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});

export default router;