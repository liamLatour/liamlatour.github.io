<template>
  <h1 class="sm:text-5xl text-3xl sm:mb-10 mb-4 font-semibold">
    {{ text }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleItem",
  props: {
    text: String,
  }
});
</script>