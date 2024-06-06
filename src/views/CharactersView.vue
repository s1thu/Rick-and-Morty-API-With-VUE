<script setup>
import RickandMortyService from '@/services/RickandMortyService'
import { ref, onMounted } from 'vue'
import CharacterCard from '@/components/ReusableCard.vue'

const characters = ref(null)

onMounted(() => {
  RickandMortyService.getCharacters()
    .then((response) => {
      console.log(response)
      characters.value = response.data.results
      console.log(characters.value)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<template>
  <h1>Characters</h1>
  <div class="card-list">
    <CharacterCard
      v-for="character in characters"
      :key="character.id"
      :character="character"
    ></CharacterCard>
  </div>
</template>
<style scoped>
.card-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
