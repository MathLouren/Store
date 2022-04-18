import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue"
import Main from "@/components/Main.vue"
import Register from "../views/Register.vue"



Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      name:"Main",
      component: Main
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ],
  scrollBehavior(){
    return window.scrollTo({top:0, behavior:"smooth"});
  }
})

export default router
