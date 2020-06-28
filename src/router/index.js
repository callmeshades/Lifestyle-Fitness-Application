import Vue from 'vue'
import VueRouter from 'vue-router'


import { checkUserSession, closeUserSession, checkUserGroup, checkTrainerGroup } from '../utils';


import Login from '../views/Login.vue'
import DashboardContainer from '../components/components/DashboardContainer';
import Users from "../views/Users";
import AllExercises from '../components/exercises/all-exercises/AllExercises';
import AllPrograms from '../components/program/all-programs/AllPrograms';
import EditProgramContainer from "../components/program/edit-program/EditProgramContainer";
import EditExerciseContainer from "../components/exercises/edit-exercise/EditExerciseContainer";
import AllClients from "../components/clients/all-clients/AllClients";
import EditClient from "../components/clients/edit-client/EditClient";
import ChangePassword from "../users/change_password/ChangePassword";


Vue.use(VueRouter);


const routes = [
    { path: '/trainers', component: DashboardContainer, name: 'Dashboard',
        beforeEnter: (to, from, next) => {
            checkTrainerGroup().then(data => {
                if (data.success) {
                    if (data.firstLogin) {
                        next({ name: 'TrainerChangePassword' });
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
            }
        ]
    },
    { path: '/users', component: Users, name: 'Users',
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
                path: 'change-password',
                component: ChangePassword,
                name: 'ChangePassword'
            }
        ]
    },
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


const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;
