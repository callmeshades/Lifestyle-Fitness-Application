<template>
    <div class="container">
        <div class="row">
            <div class="col-md my-4">
                <h3>Welcome to Master Lifestyle!</h3>
                <p class="text-muted lead">Seeing as how this is your first login we ask that you change the default password sent to you.</p>
                <div class="shadow p-4 rounded border">
                    <h5 class="mb-3">Change your password</h5>
                    <NewPasswordForm @submitPasswordChange="submitPasswordChange" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewPasswordForm from "./components/NewPasswordForm";
    export default {
        name: "ChangePassword",
        components: {NewPasswordForm},
        methods: {
            submitPasswordChange() {
                event.preventDefault();
            }
        }
    }
</script>

<style scoped>

</style>