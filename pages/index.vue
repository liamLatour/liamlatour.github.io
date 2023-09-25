<template>
  <TitleItem :text="$t('welcome.title')"/>
  <WelcomeHome />
</template>

<script setup lang="ts">
import TitleItem from '~/components/widgets/TitleItem.vue';

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