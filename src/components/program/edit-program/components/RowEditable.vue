<template>
    <tr>
        <td class="w-64 px-4 py-2">
            <!-- <v-select label="name" :options="allExercises" :reduce="name => { name.name }" v-model="exercise.name" /> -->
            <v-select label="name" :options="allExercises" :value="selected" @input="setSelected" />
<!--            <input-->
<!--                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"-->
<!--                type="text" v-model="exercise.name"-->
<!--            />-->
        </td>
        <td class="px-4 py-2">
            <input
                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"
                type="text" v-model="exercise.sets"
            />
        </td>
        <td class="px-4 py-2">
            <input 
                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"
                type="text" v-model="exercise.reps"
            />
        </td>
        <td class="px-4 py-2">
            <input
                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"
                type="text" v-model="exercise.note"
            />
        </td>
        <td class="px-4 py-2">
            <button @click="$emit('deleteExercise', exercise.id)" class="btn btn-link btn-sm px-2 py-0">
                <i class="fas fa-times"/>
            </button>
        </td>
    </tr>
</template>

<script>
    import vSelect from 'vue-select';
    export default {
        name: "RowEditable.vue",
        components: {vSelect},
        props: {
            exercise: Object,
            allExercises: Array
        },
        data() {
            return {
                selected: ''
            }
        },
        methods: {
            setSelected(value) {
                this.selected = value.name;
                this.exercise.name = value.name;
                this.exercise.exercise_id = value.id;
            }
        },
        created() {
            this.selected = this.exercise.name;
        }
    }
</script>

<style lang="scss" scoped>
    .v-select {
        min-width: 250px;
    }
</style>