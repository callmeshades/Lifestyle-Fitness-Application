<template>
    <div class="users-wrapper">
        <div class="users-container">
            <NavBar />
            <Loading v-if="loading" />
            <router-view v-else />
        </div>
    </div>
</template>

<script>
    import NavBar from "../users/components/navbar/NavBar";
    import { getUserDetails } from "../utils";
    import Loading from "../components/components/Loading";
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
    .users-wrapper {
        display: flex;

        .sidebar {
            min-width: 200px;
            max-width: 200px;
            height: 100vh;
        }

        .sidebar-active {
            display: block;
        }

        .sidebar-inactive {
            display: none;
        }

        .users-container {
            width: 100%;
        }

    }
</style>