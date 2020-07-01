<template>
    <header class="shadow-sm mb-4 border-bottom">
        <nav class="navbar navbar-expand-lg navbar-light bg-white container">
            <a class="navbar-brand">
                <Logo/>
                <span class="ml-2">Trainers</span>
            </a>
            <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarNav" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Clients</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="createViewDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Create & View
                        </a>
                        <div class="dropdown-menu" aria-labelledby="createViewDropdown">
                            <router-link class="dropdown-item" to="/all-exercises">Exercises</router-link>
                            <router-link class="dropdown-item" to="/all-programs">Programs</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<script>
import Logo from '../../../components/Logo';
export default {
    name: 'Navbar',
    components: {Logo}
}
</script>

<style lang="scss" scoped>
</style>