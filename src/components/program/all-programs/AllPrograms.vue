<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center pb-4">
            <h5>All Programs</h5>
            <button class="btn btn-sm btn-dark" @click="createNewProgram">
                <PlusIcon/>
            </button>
        </div>
        <ProgramsTable />
    </div>
</template>

<script>
    import ProgramsTable from './components/ProgramsTable';
    import { PlusIcon } from 'vue-feather-icons';
    import {createBlankProgram} from '../utils';
    export default {
        name: 'AllPrograms',
        components: { ProgramsTable, PlusIcon },
        methods: {
            createNewProgram() {
                // Create a new blank program and save in the DB
                // Fetch and redirect based on the programs ID
                createBlankProgram().then(data => {
                    if (data.success) {
                        this.$router.push({name: 'EditProgram', params: { id: data.id }});
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>