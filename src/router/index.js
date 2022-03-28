import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {path:"",name:"xuange",component:()=>import("../views/homes/HomeIndex")},
      {path:"2-1",meta:["数据管理","用户列表"],component:()=>import("../views/homes/HomeUser")},
      {path:"2-2",meta:["数据管理","商户列表"],component:()=>import("../views/homes/HomeShop")},
      {path:"2-3",meta:["数据管理","食品列表"],component:()=>import("../views/homes/HomeFood")},
      {path:"2-4",meta:["数据管理","订单列表"],component:()=>import("../views/homes/HomeOrder")},
      {path:"2-5",meta:["数据管理","管理员列表"],component:()=>import("../views/homes/HomePerson")}
    ]
  },
  {
    path:"/login",
    name:"MyLogin",
    component:()=>import("../views/MyLogin.vue")
  },
  {
    path:"/form",
    name:"MyForm",
    component:()=>{ return import("../views/MyForm1.vue") }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
// 权限管理 路由守卫
router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.path==="/login"){ //login 没有权限约束
    next()
  }else{
    let token = localStorage.getItem("token")
    if(!token)return next({path:"/login"})
    if(token)return next()
  }
})

export default router;
