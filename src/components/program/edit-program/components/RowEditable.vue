<template>
    <tr>
        <td class="px-4 py-2">
            <input
                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"
                type="text" v-model="exercise.name"
            />
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
            <button @click="$emit('deleteExercise', exercise.id)" class="btn btn-dark btn-sm px-2 py-0">X</button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "RowEditable.vue",
        props: {
            exercise: Object
        }
    }
</script>

<style scoped>

</style>