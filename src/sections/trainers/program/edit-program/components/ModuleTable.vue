<template>
    <div class="border shadow-lg mt-5 mb-5 table-responsive">
        <ModuleTitle :module="module" />
        <table class="table table-hover">
            <thead class="bg-light text-dark">
                <EditableTHead
                    v-if="module.editable"
                    @deleteModule="$emit('deleteModule', module.id)"
                    @addExercise="$emit('addExercise', module.id)"
                    :module="module"
                />
                <ViewTHead
                    v-else
                    :module="module"
                />
            </thead>
            <tbody>
                <template v-for="exercise in module.exercises">
                    <RowEditable :exercise="exercise" :all-exercises="allExercises" v-if="module.editable" :key="exercise.id" @deleteExercise="$emit('deleteExercise', exercise.id, module.id)" />
                    <RowView :exercise="exercise" v-else :key="exercise.id" />
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import EditableTHead from "./EditableTHead";
    import ViewTHead from "./ViewTHead";
    import RowEditable from "./RowEditable";
    import RowView from "./RowView";
    import ModuleTitle from "./ModuleTitle";
    export default {
        name: "ModuleTable.vue",
        props: {
            module: Object,
            allExercises: Array
        },
        components: {ModuleTitle, RowView, RowEditable, ViewTHead, EditableTHead}
    }
</script>

<style lang="scss" scoped>
    div {
        margin-top: 20px;
    }
</style>