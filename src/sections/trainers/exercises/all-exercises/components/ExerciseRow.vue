<template>
  <tr class="tr-hovering" @mouseenter="hovering=true" @mouseleave="hovering=false" >
    <td>{{ exercise.name }}</td>
    <td>{{ exercise.blob.notes }}</td>
    <td>{{ exercise.blob.description }}</td>
    <td>{{ exercise.blob.images.length > 0 ? 'Yes' : 'No' }}</td>
    <td>{{ exercise.blob.videos.hasVideo > 0 ? 'Yes' : 'No' }}</td>

    <ExerciseRowHover
        v-if="hovering"
        :exercise="exercise"
    />

  </tr>
</template>

<script>
  import ExerciseRowHover from "./ExerciseRowHover";
  export default {
    name: "ExerciseRow",
    components: {ExerciseRowHover},
    props: {
      exercise: Object
    },
    data() {
      return {
        hovering: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.tr-hovering {
  &:hover {
    background: #fafafa;
  }
}
</style>