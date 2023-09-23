<template>
  <div class="border-l-[2px] border-opacity-30 dark:border-white border-black">
    <AboutItem v-for="(item, index) in aboutItems" :key="index"
      :title="$t('about.items.'+item+'.title')" :text="$t('about.items.'+item+'.text')" :date="$t('about.items.'+item+'.date')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutInfo",
  data(){
    return {
      aboutItems: ["stage-beckers", "mines", "prepa", "olympiade"]
    }
  }
});
</script>