import Vue from 'vue'
import VueRouter from 'vue-router'


import { checkUserSession, closeUserSession, checkUserGroup, checkTrainerGroup } from '../utils';


import Login from '../views/Login.vue'
import DashboardContainer from '../sections/trainers/components/DashboardContainer';
import Users from "../views/Users";
import AllExercises from '../sections/trainers/exercises/all-exercises/AllExercises';
import AllPrograms from '../sections/trainers/program/all-programs/AllPrograms';
import EditProgramContainer from "../sections/trainers/program/edit-program/EditProgramContainer";
import EditExerciseContainer from "../sections/trainers/exercises/edit-exercise/EditExerciseContainer";
import AllClients from "../sections/trainers/clients/all-clients/AllClients";
import EditClient from "../sections/trainers/clients/edit-client/EditClient";
import ChangePassword from "../sections/users/change_password/ChangePassword";
import UsersHome from "../sections/users/home/UsersHome";

import EditProgram from "../sections/trainers/program/edit_program_new/EditProgram";

Vue.use(VueRouter);


const routes = [
    { path: '/trainers', component: DashboardContainer, name: 'Dashboard',
        beforeEnter: (to, from, next) => {
            checkTrainerGroup().then(data => {
                if (data.success) {
                    if (data.firstLogin) {
                        next();
                    } else {
                        next();
                    }
                } else {
                    next({ name: 'Login' })
                }
            })
        },
        children: [
            {
                path: 'all-clients',
                component: AllClients,
                name: 'AllClients'
            },
            {
                path: 'edit-client/:id',
                component: EditClient,
                name: 'EditClient'
            },
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
            },
            {
                path: 'edit-program-new/:id',
                component: EditProgram,
                name: 'EditProgramNew'
            }
        ]
    },
    { path: '/users', component: Users,
        beforeEnter: (to, from, next) => {
            checkUserGroup().then(data => {
                if (data.success) {
                    next();
                } else {
                    next({ name: 'Login' })
                }
            });
        },
        children: [
            {
                path: '',
                component: UsersHome,
                name: 'Users'
            },
            {
                path: 'change-password',
                component: ChangePassword,
                name: 'ChangePassword'
            }
        ]
    },
    { path: '/login', component: Login, name: 'Login', beforeEnter: (to, from, next) => {
        checkUserSession().then(data => {
            if (data.authed) {
                next({ name: 'Users' });
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


const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;
