<template>
  <div class="exercise-card shadow-sm p-3"
       :style="`background: ${color}`"
       draggable="true"
       @dragstart="startDraggingCard"
       @dragover="onDragOverCard"
       @dragend="onDragEndCard"
  >
    <div>
      <h5>Exercise Name</h5>
      <p>asdasdasd</p>
    </div>
    <div>
      <span class="move-hover">
        <MoveIcon size="1x" />
      </span>
    </div>
  </div>
</template>

<script>
import { MoveIcon } from 'vue-feather-icons';
export default {
  name: "ExerciseCard",
  data() {
    return {
      color: 'white',
    }
  },
  components: {
    MoveIcon
  },
  methods: {
    startDraggingCard() {
      this.color = '#e3e3e3';
      console.log('Started dragging some cool card');
    },
    onDragOverCard() {
      event.preventDefault();
    },
    onDragEndCard() {
      this.color = 'white';
      console.log('Dropped the card!')
    }
  }
}
</script>

<style lang="scss" scoped>
.exercise-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: grab;
}
</style>