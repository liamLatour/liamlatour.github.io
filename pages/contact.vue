<template>
  <main class="m-auto mt-20 w-4/5">
    <ContactInfo />
  </main>
</template>

<script setup lang="ts">
  useHead({
    // Can be static or computed
    title: 'Contact',
    meta: [
      {
        name: 'description',
        content: 'On which social networks to contact me',
      },
    ],
  });
</script>
