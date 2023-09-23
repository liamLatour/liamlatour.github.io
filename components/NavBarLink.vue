<template>
  <NuxtLink
    :class="$route.name==to ? 'opacity-50 cursor-default':''"
    class="text-lg m-auto group transition-transform duration-300"
    :to="localePath(to)"
  >
    {{ text }}
    <span :class="$route.name==to ? 'hidden':''" class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
  </NuxtLink>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBarLink",
  components: {
  },
  props:{
    to: String,
    text: String
  }
});
</script>