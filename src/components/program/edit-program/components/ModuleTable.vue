<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <EditableTHead
                    v-if="module.editable"
                    @deleteModule="$emit('deleteModule', module.id)"
                    :module-id="module.id"
                />
            </thead>
            <tbody>
                <tr v-for="exercise in module.exercises" :key="exercise.id">
                    <template v-if="editable">
                        <td><input type="text" v-model="exercise.name"></td>
                        <td><input type="text" v-model="exercise.sets"></td>
                        <td><input type="text" v-model="exercise.reps"></td>
                        <td><input type="text" v-model="exercise.note"></td>
                        <td>
                            Edit
                        </td>
                    </template>
                    <template v-else>
                        <td>{{ exercise.name }}</td>
                        <td>{{ exercise.sets }}</td>
                        <td>{{ exercise.reps }}</td>
                        <td>{{ exercise.note }}</td>
                        <td>
                            Edit
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import EditableTHead from "./EditableTHead";
    export default {
        name: "ModuleTable.vue",
        props: {
            module: Object
        },
        components: {EditableTHead}
    }
</script>

<style lang="scss" scoped>
    div {
        margin-top: 20px;
    }
</style>