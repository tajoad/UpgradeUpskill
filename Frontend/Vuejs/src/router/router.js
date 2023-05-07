import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //     path: '/',
  //     name: 'Home',
  //     component: () => import('../views/Home.vue'),
  //     // meta: {
  //     //     requiresAuth:true
  //     // }
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "SetPage",
    component: () => import("../views/SetPage.vue"),
  },
  {
    path: "/learningroom/:data",
    name: "LearningRoom",
    component: () => import("../views/LearningRoom.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/profile/:data",
    name: "Profile",
    props: true,
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/homepage/:data",
    name: "Homepage",
    component: () => import("../views/Homepage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async(to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {

//         const token = localStorage.getItem('token');

//         if(token) {
//             // check if token is valid
//             return next();
//         }

//         return('/login')
//     }

//     next();
// })

export default router;
