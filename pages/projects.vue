<template>
  <TitleItem :text="$t('projects.title')"/>
  <ProjectsGallery />
</template>

<script setup lang="ts">
import TitleItem from '~/components/widgets/TitleItem.vue';

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
