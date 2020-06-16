import Vue from 'vue'
import VueRouter from 'vue-router'


import { checkUserSession, closeUserSession } from '../utils';


import Login from '../views/Login.vue'
import DashboardContainer from '../components/components/DashboardContainer';
import Users from "../views/Users";
import AllExercises from '../components/exercises/all-exercises/AllExercises';
import AllPrograms from '../components/program/all-programs/AllPrograms';
import EditProgramContainer from "../components/program/edit-program/EditProgramContainer";
import EditExerciseContainer from "../components/exercises/edit-exercise/EditExerciseContainer";


Vue.use(VueRouter)


const routes = [
    { path: '/', component: DashboardContainer, name: 'Dashboard',
        beforeEnter: (to, from, next) => {
            checkUserSession().then(data => {
                if (data.authed) {
                    next();
                } else {
                    next({ name: 'Login' })
                }
            })
        },
        children: [
            {
                path: 'all-exercises',
                component: AllExercises,
                name: 'AllExercises'
            },
            {
                path: 'all-programs',
                component: AllPrograms,
                name: 'AllPrograms'
            },
            {
                path: 'edit-exercise/:id',
                component: EditExerciseContainer,
                name: 'EditExercise'
            },
            {
                path: 'edit-program/:id',
                component: EditProgramContainer,
                name: 'EditProgram'
            }
        ]
    },
    { path: '/users', component: Users, name: 'Users' },
    { path: '/login', component: Login, name: 'Login', beforeEnter: (to, from, next) => {
        checkUserSession().then(data => {
            if (data.authed) {
                next({ name: 'Dashboard' });
            } else {
                next();
            }
        });
    } },
    { path: '/logout', name: 'Logout', beforeEnter: (to, from, next) => {
        closeUserSession().then(data => {
            if (data.success) {
                next({name: 'Login'});
            }
        });
    } }
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

export default router;
