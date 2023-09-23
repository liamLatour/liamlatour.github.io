<template>
  <div class="max-w-7xl m-auto h-full p-8 pb-32">
    <NavBar/>
    <slot />
  </div>
</template>

<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
    dir: head.value.htmlAttrs!.dir
  },
  bodyAttrs: {
    class: 'bg-slate-100 text-black dark:bg-slate-950 dark:text-white bg-blend-luminosity bg-plus-pattern dark:bg-plus-pattern-dark bg-[length:200px_200px] antialiased transition-colors duration-200'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Liam Latour` : 'Liam Latour';
  }
})
</script>