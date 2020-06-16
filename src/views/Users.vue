<template>
    <div class="users-wrapper">
        <div
            class="sidebar bg-dark"
            :class="sidebarActive ? 'sidebar-active' : 'sidebar-inactive'"
        >
            <h2>Hi</h2>
        </div>
        <div class="users-container">
            <NavBar
                :sidebar-active="sidebarActive"
                @changeSidebarState="changeSidebarState"
            />
            <ChangePassword/>
        </div>

    </div>
</template>

<script>
    import NavBar from "../users/components/navbar/NavBar";
    import ChangePassword from "../users/change_password/ChangePassword";
    export default {
        name: "Users",
        components: {ChangePassword, NavBar},
        data() {
            return {
                sidebarActive: true
            }
        },
        methods: {
            changeSidebarState() {
                this.sidebarActive = !this.sidebarActive;
            }
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