import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AllExercises from '../components/exercises/all-exercises/AllExercises';
import AllPrograms from '../components/program/all-programs/AllPrograms';
import EditProgramContainer from "../components/program/edit-program/EditProgramContainer";

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/all-exercises',
        name: 'AllExercises',
        component: AllExercises
    },
    {
        path: '/all-programs',
        name: 'AllPrograms',
        component: AllPrograms
    },
    {
      path: '/edit-program/:id',
      name: 'EditProgram',
      component: EditProgramContainer
    },
    {
        path: '/',
        name: 'Dashboard',
        component: EditProgramContainer
    }
]

// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
