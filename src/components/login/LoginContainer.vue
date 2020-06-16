<template>
    <div>
        <div class="d-flex justify-content-center mb-3">
            <Logo />
            <h4 class="ml-2">User Login</h4>
        </div>
        <Alert :alertDetails="alertDetails" />
        <LoginForm @submitChildForm="captureForm" :loginData="loginData" />
        <p class="mt-3 text-muted d-flex justify-content-end">Forgot your password? <a href="#" class="ml-1">Reset it.</a></p>
    </div>
</template>

<script>
import LoginForm from "./LoginForm";
import Alert from '../components/Alert';
import Logo from '../components/Logo';
import { postLoginData, fetchLoginToken } from './utils';
export default {
    name: 'LoginContainer',
    components: { LoginForm, Alert, Logo },
    data() {
        return {
            loginData: { username: '', password: '' },
            csrf_token: '',
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
        validateLoginRequest() {
            postLoginData(this.loginData.username, this.loginData.password, this.csrf_token)
            .then(data => {
                if (data.success) {
                    this.$router.push('/')
                } else {
                    this.resetFormData();
                    this.alertDetails = {
                        class: 'danger',
                        message: data.message,
                        visible: true
                    }
                }
            })
        },
        resetFormData() {
            this.loginData = { username: '', password: '' };
        }
    },
    created() {
        fetchLoginToken().then(data => {
            if (data.token) {
                this.csrf_token = data.token;
            }
        })
    }
}
</script>

<style>

</style>