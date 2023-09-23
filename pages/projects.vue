<template>
  <main class="m-auto mt-20 w-4/5">
    <h1 class="text-5xl mb-10 font-semibold">
      {{ $t('projects.title') }}
    </h1>
    <ProjectsGallery />
  </main>
</template>

<script setup lang="ts">
  useHead({
    // Can be static or computed
    title: 'Projects',
    meta: [
      {
        name: 'description',
        content: 'A sample of my programming projects',
      },
    ],
  });
</script>
