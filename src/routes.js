const PageHome = require("./page/Index.vue").default;
const Page404 = require("./page/status/4xx/404.vue").default;




const routes = [
  {
    path: "/",
    name: "home",
    component: PageHome
  },
  {
    path: "*",
    name: "404",
    component: Page404
  }
];


export default routes;
