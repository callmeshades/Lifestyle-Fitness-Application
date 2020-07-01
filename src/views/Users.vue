<template>
    <div class="full-width">
        <NavBar />
        <div class="mt-5" v-if="loading">
            <Loading />
        </div>
        <div v-else class="container-xl mt-4">
            <router-view :userData="userData" />
        </div>
    </div>
</template>

<script>
    import NavBar from "../sections/users/components/navbar/NavBar";
    import { getUserDetails } from "../utils";
    import Loading from "../components/Loading";
    export default {
        name: "Users",
        components: {Loading, NavBar},
        data() {
            return {
                userData: {},
                loading: false
            }
        },
        created() {
            this.loading = true;
            getUserDetails().then(data => {
                if (data.success) {
                    // If the user doesn't have an active account send them to the login
                    if (!data.user.active) {
                        this.$router.push({ name: 'Login' });
                    }

                    // The current user is not apart of the user group
                    if (!data.user.groups.filter(e => e.name === 'user').length > 0) {
                        this.$router.push({ name: 'Login' })
                    } else {
                        this.userData = data.user;
                    }

                    // Check to see if this is the users first login
                    // if so they need to update their password
                    if (this.userData.firstLogin && this.$route.name !== 'ChangePassword') {
                        this.$router.push({ name: 'ChangePassword' })
                    }

                    this.loading = false;

                }
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>