<template>
    <form @submit="submitForm" class="shadow p-4 rounded border">
        <div class="form-group">
            <label>Username:</label>
            <input type="text" v-model="loginData.username" class="form-control form-control-lg" placeholder="Username..." required>
        </div>
        <div class="form-group">
            <label>Password:</label>
            <input type="password" v-model="loginData.password" class="form-control form-control-lg" placeholder="Password..." required>
        </div>
        <div class="form-group">
            <button class="btn btn-dark btn-lg btn-block">Sign in</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'LoginForm',
    props: {
        loginData: Object
    },
    methods: {
        submitForm() {
            event.preventDefault();
            this.$emit('submitChildForm');
        }
    }
}
</script>

<style>

</style>