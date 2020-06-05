<template>
    <tr>
        <td class="border px-4 py-2">
            <input
                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"
                type="text" v-model="exercise.name"
            />
        </td>
        <td class="w-2 border px-4 py-2">
            <input
                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"
                type="text" v-model="exercise.sets"
            />
        </td>
        <td class="w-2 border px-4 py-2">
            <input 
                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"
                type="text" v-model="exercise.reps"
            />
        </td>
        <td class="border px-4 py-2">
            <input
                class="bg-white focus:outline-none focus:shadow-outline-md border border-gray-300 py-1 px-3 block w-full appearance-none leading-normal"
                type="text" v-model="exercise.note"
            />
        </td>
        <td class="text-center border px-4 py-2">
            <button @click="$emit('deleteExercise', exercise.id)" class="bg-gray-100 px-2 py-0 font-normal">X</button>
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