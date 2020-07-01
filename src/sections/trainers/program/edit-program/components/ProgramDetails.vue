<template>
    <div class="shadow p-4">
        <div v-if="editable">
            <form @submit="$emit('nextSection')">
                <div class="form-group">
                    <label class="mr-2">Program title:</label>
                    <input type="text" v-model="program.name" class="form-control" required>
                </div>
                <div class="form-group">
                    <div class="d-flex justify-content-between">
                        <label>Program description:</label>
                        <span class="link-clear" @click="program.description = ''">Clear</span>
                    </div>
                    <textarea class="form-control" rows="3" v-model="program.description"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-dark btn-block">Next</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgramDetails",
        data() {
            return {
                editable: true
            }
        },
        props: {
            program: Object
        }
    }
</script>

<style lang="scss" scoped>
    .link-clear {
        color: dodgerblue;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
</style>