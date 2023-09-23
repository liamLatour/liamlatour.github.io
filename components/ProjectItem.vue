<template>
    <div class="h-80 w-96 rounded-2xl overflow-hidden relative
    hover:scale-105 transition-transform duration-300
    cursor-pointer group border-2 border-black dark:border-white" @click="select()">
      
      <div class="absolute left-0 top-0 h-full w-full flex flex-col
        justify-end p-5 text-white bg-gradient-to-t from-[#000000A0]
        opacity-0 group-hover:opacity-100 to-transparent transition-all">
      </div>

      <div class="absolute left-0 top-0 h-full w-full flex flex-col justify-end p-5 text-white bg-gradient-to-t from-[#000000F0] to-transparent">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <p class="mt-1 mb-4">{{ description }}</p>
        <div class="flex text-xs space-x-1">
          <span v-for="(item, index) in technologies" :key="index"
            class="dark:bg-gray-900 bg-white text-black dark:text-white rounded-full px-3 py-1">
            {{ item }}
          </span>
        </div>
      </div>

      <img :src="image"
        alt="Project image"
        class="object-cover min-w-full min-h-full m-auto"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsItem",
  props: {
    technologies: Array<String>,
    description: String,
    title: String,
    image: String,
    url: String
  },
  methods: {
    select(){
      window.open(this.url);
    }
  }
});
</script>