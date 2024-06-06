<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/HeaderView.vue'
</script>

<template>
  <Header></Header>
  <nav>
    <ul>
      <li><RouterLink :to="{ name: 'characters-view' }">Characters</RouterLink></li>
      <li><RouterLink :to="{ name: 'locations-view' }">Locations</RouterLink></li>
      <li><RouterLink :to="{ name: 'episodes-view' }">Episodes</RouterLink></li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  text-align: center;
}

ul {
  display: flex;
  list-style-type: none;
  justify-content: center;
  font-size: 2.5vh;
}

li::after {
  content: '   |   ';
}

nav a {
  text-decoration: none;
}
</style>
