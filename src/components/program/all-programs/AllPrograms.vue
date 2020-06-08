<template>
    <div class="container">
        All Programs
        <button class="btn btn-primary" @click="$router.push({ name: 'EditProgram', params: { id: 1 } })">Create Program</button>
    </div>
</template>

<script>
export default {
    name: 'AllPrograms'
}
</script>

<style lang="scss" scoped>

</style>