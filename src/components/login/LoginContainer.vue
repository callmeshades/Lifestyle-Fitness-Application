<template>
    <div>
        {{loginData.username}}
        {{loginData.password}}
        <LoginForm @submitChildForm="captureForm" :loginData="loginData" />
    </div>
</template>

<script>
import LoginForm from "./LoginForm";
export default {
    name: 'LoginContainer',
    components: {LoginForm},
    data() {
        return {
            loginData: { username: '', password: '' }
        }
    },
    methods: {
        captureForm() {
            alert(`Captured the form data ${this.loginData.username} ${this.loginData.password}`);
            this.resetFormData();
        },
        resetFormData() {
            this.loginData = { username: '', password: '' };
        }
    }
}
</script>

<style>

</style>