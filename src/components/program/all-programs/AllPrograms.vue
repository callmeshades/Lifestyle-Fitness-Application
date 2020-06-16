<template>
    <div class="container-fluid">
        All Programs
        <button class="btn btn-primary" @click="$router.push({ name: 'EditProgram', params: { id: 1 } })">Create Program</button>
        <ProgramsTable />
    </div>
</template>

<script>
    import ProgramsTable from './components/ProgramsTable';
    export default {
        name: 'AllPrograms',
        components: { ProgramsTable }
    }
</script>

<style lang="scss" scoped>

</style>