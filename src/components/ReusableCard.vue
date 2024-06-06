<script setup>
defineProps({
  character: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="card">
    <h3>{{ character.name }}</h3>
    <img :src="character.image" :alt="character.name" />
  </div>
</template>
<style scoped>
.card {
  padding: 10px;
  width: 30%;
  font-size: 2vh;
  border: 1px solid black;
}
</style>
