<template>
    <form @submit="formSubmitCheck">
        <div class="form-group">
            <input type="password" class="form-control" v-model="newPass" placeholder="New password..." @change="checkForMatch" required>
            <small v-if="!matches" class="text-danger">Your passwords don't match!</small>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="confirmPass" placeholder="Confirm password..." @change="checkForMatch" required>
        </div>
        <div class="form-group">
            <button class="btn btn-dark btn-block">Update Password</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "NewPasswordForm",
        data() {
            return {
                matches: true,
                newPass: '',
                confirmPass: ''
            }
        },
        methods: {
            checkForMatch() {
                if (this.newPass.trim().length > 0 && this.confirmPass.trim().length > 0) {
                    this.matches = this.newPass.trim() === this.confirmPass.trim();
                } else {
                    this.matches = true;
                }
            },
            formSubmitCheck() {
                if (!this.matches) {
                    event.preventDefault();
                } else {
                    this.$emit('submitPasswordChange', this.newPass);
                }
            }
        }
    }
</script>

<style scoped>

</style>