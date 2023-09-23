<template>
  <main class="m-auto mt-20 w-4/5">
    <h1 class="text-5xl mb-10 font-semibold">
      {{ $t('about.title') }}
    </h1>
    <AboutInfo/>
  </main>
</template>

<script setup lang="ts">
useHead({
  // Can be static or computed
  title: 'About',
  meta: [
    {
      name: 'description',
      content: 'My professional curriculum',
    },
  ],
});
</script>
