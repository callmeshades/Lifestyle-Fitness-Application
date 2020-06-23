<template>
    <nav class="navbar navbar-expand bg-light border-bottom mb-4">
        <div class="container-xl d-flex justify-content-start align-items-md-center flex-wrap">
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" id="menuOne" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</button>
                <div class="dropdown-menu" aria-labelledby="menuOne">
                    <router-link to="/all-clients" class="dropdown-item">All Clients</router-link>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" id="menuTwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Exercises</button>
                <div class="dropdown-menu" aria-labelledby="menuTwo">
                    <router-link to="/all-exercises" class="dropdown-item">All Exercises</router-link>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" id="menuThree" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Programs</button>
                <div class="dropdown-menu" aria-labelledby="menuThree">
                    <router-link to="/all-programs" class="dropdown-item">All Programs</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "BottomNavbar"
    }
</script>

<style scoped>

</style>