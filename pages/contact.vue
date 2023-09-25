<template>
  <ContactInfo />
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
