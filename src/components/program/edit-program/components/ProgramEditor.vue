<template>
    <div>
        <div class="d-flex justify-content-between">
            <ProgramDetailsInformation :program="program"/>
            <button class="btn btn-light btn-sm" @click="$emit('changeSection')">Edit</button>
        </div>

        <div class="d-flex justify-content-end mt-2">
            <button @click="$emit('addModule')" class="btn btn-secondary btn-sm">Add Module</button>
        </div>
        <div v-for="module in program.modules" :key="module.id">
            <ModuleTable @deleteModule="$emit('removeModule', module.id)" @addExercise="$emit('addExercise', module.id)" @deleteExercise="deleteExercise" :module="module" :all-exercises="allExercises" />
        </div>
        
        <div class="mt-2" v-if="program.modules.length > 0">
            <button class="btn btn-block btn-dark"
                @click="createProgram"
            >Update Program</button>
        </div>
    </div>
</template>

<script>
    import ModuleTable from "./ModuleTable";
    import ProgramDetailsInformation from "./ProgramDetailsInformation";
    export default {
        name: "ProgramEditor.vue",
        components: {ProgramDetailsInformation, ModuleTable},
        props: {
            program: Object,
            allExercises: Array
        },
        methods: {
            deleteExercise(exerciseID, moduleID) {
                this.$emit('deleteExercise', exerciseID, moduleID);
            },
            createProgram() {
                this.$emit('createProgram');
            }
        }
    }
</script>

<style scoped>

</style>