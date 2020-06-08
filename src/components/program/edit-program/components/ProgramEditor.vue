<template>
    <div>
        <div class="d-flex">
            <button @click="$emit('addModule')" class="btn btn-dark btn-sm">Add Module</button>
        </div>
        <div v-for="module in program.modules" :key="module.id">
            <ModuleTable @deleteModule="$emit('removeModule', module.id)" @addExercise="$emit('addExercise', module.id)" @deleteExercise="deleteExercise" :module="module" />
        </div>
    </div>
</template>

<script>
    import ModuleTable from "./ModuleTable";
    export default {
        name: "ProgramEditor.vue",
        components: {ModuleTable},
        props: {
            program: Object
        },
        methods: {
            deleteExercise(exerciseID, moduleID) {
                this.$emit('deleteExercise', exerciseID, moduleID)
            }
        }
    }
</script>

<style scoped>

</style>