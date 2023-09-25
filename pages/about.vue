<template>
  <TitleItem :text="$t('about.title')"/>
  <AboutInfo/>
</template>

<script setup lang="ts">
import TitleItem from '~/components/widgets/TitleItem.vue';

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
