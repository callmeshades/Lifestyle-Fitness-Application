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
                        <button class="btn btn-link btn-sm" @click="deleteProgramByID(program.id)">
                            <XIcon size="1.25x" />
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import {getAllPrograms, deleteProgram} from '../../utils';
    import {EditIcon, XIcon} from 'vue-feather-icons';
    import Swal from 'sweetalert2';

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
            fetchPrograms() {
              this.updateLoading(true);
              getAllPrograms().then(data => {
                if (data.success) {
                  this.parseProgramsBlob(data.programs);
                }
                this.updateLoading(false);
              });
            },
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
            deleteProgramByID(programId) {
              Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this program once it\'s gone!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it',
                cancelButtonText: 'Cancel'
              }).then((result) => {
                this.updateLoading(true);
                if (result.value) {
                  deleteProgram(programId).then(data => {
                    if (data.success) {
                      Swal.fire(
                          'Deleted!',
                          'Successfully deleted the program.',
                          'success'
                      );
                    }
                    else {
                      Swal.fire(
                          'Error',
                          data.message,
                          'error'
                      );
                    }
                    this.updateLoading(false);
                  }).then(() => {
                    this.fetchPrograms();
                  });
                }
              })
            },
            updateLoading(newBool) {
              this.$emit('updateLoading', newBool);
            }
        },
        created() {
          this.fetchPrograms();
        }
    }
</script>

<style>

</style>