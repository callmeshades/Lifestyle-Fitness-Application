<template>
    <div class="row">
        <div class="col-md my-4">
            <h3>Welcome to Master Lifestyle!</h3>
            <p class="text-muted lead">Seeing as how this is your first login we ask that you change the default password sent to you.</p>
            <div class="shadow p-4 rounded border">
                <h5 class="mb-3">Change your password</h5>
                <Loading v-if="loading" />
                <NewPasswordForm v-else @submitPasswordChange="submitPasswordChange" />
            </div>
        </div>
    </div>
</template>

<script>
    import NewPasswordForm from "./components/NewPasswordForm";
    import { updatePassword } from "./requests";
    import Loading from "../../../components/Loading";

    export default {
        name: "ChangePassword",
        components: {Loading, NewPasswordForm},
        data() {
            return {
                password: '',
                loading: false
            }
        },
        methods: {
            submitPasswordChange(password) {
                this.loading = true;
                event.preventDefault();
                this.password = password;
                this.updateUserPassword();
                this.loading = false;
            },
            updateUserPassword() {
                updatePassword(this.password).then(data => {
                    if (data.success) {
                        this.$router.push({ name: "Logout" });
                    } else {
                        alert(data.message);
                    }
                    this.loading = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>