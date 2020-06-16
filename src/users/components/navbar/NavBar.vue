<template>
    <nav class="d-flex bg-light py-2 px-2">
        <span v-if="sidebarActive">
            <button
                class="btn btn-sm btn-light"
                @click="$emit('changeSidebarState')"
            >
                <ChevronLeftIcon/>
            </button>
        </span>
        <span v-if="!sidebarActive">
            <button
                class="btn btn-sm btn-light"
                @click="$emit('changeSidebarState')"
            >
                <ChevronRightIcon/>
            </button>
        </span>
    </nav>
</template>

<script>
    import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons';
    export default {
        name: "NavBar",
        props: { sidebarActive: Boolean },
        components: { ChevronRightIcon, ChevronLeftIcon }
    }
</script>

<style scoped>

</style>