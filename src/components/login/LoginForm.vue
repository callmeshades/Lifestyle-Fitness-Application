<template>
    <form @submit="submitForm">
        <div class="form-group">
            <label>Username:</label>
            <input type="text" v-model="loginData.username" class="form-control form-control-lg" required>
        </div>
        <div class="form-group">
            <label>Password:</label>
            <input type="text" v-model="loginData.password" class="form-control form-control-lg" required>
        </div>
        <div class="form-group">
            <button class="btn btn-primary btn-lg btn-block">Sign in</button>
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