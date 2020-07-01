<template>
    <div>
        <div class="d-flex justify-content-center mb-3">
            <Logo />
            <h4 class="ml-2">User Login</h4>
        </div>
        <Alert :alertDetails="alertDetails" />
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else>
            <LoginForm @submitChildForm="captureForm" :loginData="loginData" />
            <p class="mt-3 text-muted d-flex justify-content-end">Forgot your password? <a href="#" class="ml-1">Reset it.</a></p>
        </div>
    </div>
</template>

<script>
import LoginForm from "./LoginForm";
import Alert from '../../../components/Alert';
import Logo from '../../../components/Logo';
import { postLoginData, fetchLoginToken } from './utils';
export default {
    name: 'LoginContainer',
    components: { LoginForm, Alert, Logo },
    data() {
        return {
            loginData: { username: '', password: '' },
            csrf_token: '',
            loading: false,
            alertDetails: {
                message: '',
                class: 'danger',
                visible: false
            }
        }
    },
    methods: {
        captureForm() {
            this.validateLoginRequest();
        },
        resetAlert() {
            this.alertDetails = {
                class: '',
                message: '',
                visible: false
            }
        },
        validateLoginRequest() {
            this.resetAlert();
            this.loading = true;
            postLoginData(this.loginData.username, this.loginData.password, this.csrf_token)
            .then(data => {
                if (data.success) {
                    // Determine if the user is a personal trainer
                    // Redirect based on this
                    if (data.is_trainer) {
                        this.$router.push('/trainers');
                    } else {
                        this.$router.push('/users');
                    }
                } else {
                    this.resetFormData();
                    this.alertDetails = {
                        class: 'danger',
                        message: data.message,
                        visible: true
                    }
                    this.loading = false;
                }
            })
        },
        resetFormData() {
            this.loginData = { username: '', password: '' };
        }
    },
    created() {
        this.loading = true;
        fetchLoginToken().then(data => {
            if (data.token) {
                this.csrf_token = data.token;
                this.loading = false;
            }
        })
    }
}
</script>

<style>

</style>