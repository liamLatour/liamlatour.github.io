<template>
  <div class="pl-5 relative -m-[1px] mb-10">
    <span class="dark:bg-slate-950 bg-slate-100 dark:border-white border-black border-2 rounded-full h-4 w-4 absolute left-0 top-0 -translate-x-1/2"></span>
    <h4 class="absolute opacity-60 text-sm origin-bottom-right -rotate-90 -translate-x-[calc(100%+30px)] -translate-y-4">
      {{ date }}
    </h4>
    <h2 class="text-xl mb-4">
      {{ title }}
    </h2>
    <p class="xl:whitespace-pre-line	">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutItem",
  props: {
    title: String,
    text: String,
    date: String
  }
});
</script>