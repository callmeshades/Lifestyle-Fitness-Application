<template>
    <div class="border shadow-lg mt-5 mb-5 overflow-auto">
        <table class="table table-hover table-borderless">
            <thead class="bg-dark text-white">
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
                    <RowEditable :exercise="exercise" v-if="module.editable" :key="exercise.id" @deleteExercise="$emit('deleteExercise', exercise.id, module.id)" />
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
    export default {
        name: "ModuleTable.vue",
        props: {
            module: Object
        },
        components: {RowView, RowEditable, ViewTHead, EditableTHead}
    }
</script>

<style lang="scss" scoped>
    div {
        margin-top: 20px;
    }
</style>