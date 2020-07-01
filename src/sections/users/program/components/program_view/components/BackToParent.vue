<template>
    <div>
        <button class="btn btn-sm btn-link"
                @click="goBackHomeEmit"
        >
            Go Back
        </button>
    </div>
</template>

<script>
    export default {
        name: "BackToParent",
        methods: {
            goBackHomeEmit() {
                this.$emit('goBackHome');
            }
        }
    }
</script>

<style scoped>

</style>