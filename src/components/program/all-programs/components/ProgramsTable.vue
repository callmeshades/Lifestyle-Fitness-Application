<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(program, index) in allPrograms" :key="index">
                    <td>{{ program.blob.name }}</td>
                    <td>
                        <template v-if="program.blob.description.trim().length >= 0">No description</template>
                        <template v-else>{{ program.blob.description }}</template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {getAllPrograms} from '../../utils';
    export default {
        name: "ProgramsTable",
        data() {
            return {
                allPrograms: []
            }
        },
        methods: {
            parseProgramsBlob(programs) {
                let program_blob = [];
                programs.forEach(item => {
                    program_blob.push({
                        id: item.id,
                        blob: JSON.parse(item.blob)
                    });
                });
                this.allPrograms = program_blob;
            }
        },
        created() {
            getAllPrograms().then(data => {
                if (data.success) {
                    this.parseProgramsBlob(data.programs);
                }
            })
        }
    }
</script>

<style>

</style>