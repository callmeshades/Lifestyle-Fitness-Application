<template>
    <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>

    <div v-else class="table-responsive shadow-sm rounded">
        <table class="table table-hover table-borderless">
            <thead class="bg-dark text-light">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(program, index) in allPrograms" :key="index">
                    <td>{{ program.blob.name }}</td>
                    <td>
                        <template v-if="program.blob.description.trim().length <= 0">
                            <span>No description</span>
                        </template>
                        <template v-else>
                            <span class="text-truncate d-block" style="width: 190px">{{ program.blob.description }}</span>
                        </template>
                    </td>
                    <td>
                        <button class="btn btn-link btn-sm" @click="getProgramByID(program.id)">
                            <EditIcon size="1.25x" />
                        </button>
                        <button class="btn btn-link btn-sm" @click="getProgramByID(program.id)">
                            <XIcon size="1.25x" />
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import {getAllPrograms} from '../../utils';
    import {EditIcon, XIcon} from 'vue-feather-icons';
    export default {
        name: "ProgramsTable",
        components: { EditIcon, XIcon },
        props: { loading: Boolean },
        data() {
            return {
                allPrograms: [],
            }
        },
        methods: {
            parseProgramsBlob(programs) {
                let program_blob = [];
                programs.forEach(item => {
                    program_blob.push({
                        id: item.id,
                        blob: item.blob
                    });
                });
                this.allPrograms = program_blob;
            },
            getProgramByID(programID) {
                this.$router.push({ name: "EditProgram", params: { id: programID } })
            },
        },
        created() {
            this.$emit('updateLoading');
            getAllPrograms().then(data => {
                if (data.success) {
                    this.parseProgramsBlob(data.programs);
                }
                this.$emit('updateLoading');
            })
        }
    }
</script>

<style>

</style>