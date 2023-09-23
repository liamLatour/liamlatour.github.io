<template>
  <main class="mt-20 m-auto w-4/5">
    <WelcomeHome />
  </main>
</template>

<script setup lang="ts">
useHead({
  // Can be static or computed
  title: '',
  meta: [
    {
      name: 'description',
      content: 'I\'m Liam Latour A student at Mines Saint-Étienne, and passionate about computer science for many years.',
    },
  ],
});
</script>