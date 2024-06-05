<script setup>
import RickandMortyService from '@/services/RickandMortyService'
import { ref, onMounted } from 'vue'

const characters = ref(null)

onMounted(() => {
  RickandMortyService.getCharacters()
    .then((response) => {
      characters.value = response.data
      console.log(characters)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<template>
  <h1>Characters</h1>
</template>
<style></style>
