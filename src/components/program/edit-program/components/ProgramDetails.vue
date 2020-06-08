<template>
    <div>
        <div v-if="editable">
            <div class="form-group">
                <label class="mr-2">Program title:</label>
                <input type="text" v-model="program.name" class="form-control">
            </div>
            <div class="form-group">
                <label>Program description:</label>
                <textarea class="form-control" rows="3" v-model="program.description"></textarea>
            </div>
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

<style scoped>

</style>