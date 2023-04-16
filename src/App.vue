<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="p-5 text-center">
        <RouterLink  class="p-5" to="/">all</RouterLink>
        <RouterLink class="p-5" to="/">Rest</RouterLink>
        <RouterLink class="p-5" to="/about">Cafe</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
