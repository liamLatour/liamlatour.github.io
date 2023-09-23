<template>
<div class="w-full flex justify-between items-center">
  <NuxtLink :to="localePath('index')" class="text-5xl" aria-label="Home">
    <font-awesome-icon
      class="transition-transform duration-300 hover:rotate-[30deg]"
      :icon="['fas', 'asterisk']"
    />
  </NuxtLink>

  <div class="flex gap-12 items-center">
    <div class="flex gap-8">
      <NavBarLink to="about" :text="$t('navbar.about')" title="About page"/>
      <NavBarLink to="projects" :text="$t('navbar.projects')" title="Projects"/>
      <NavBarLink to="contact" :text="$t('navbar.contact')" title="Contact"/>
    </div>
    <span>
      <font-awesome-icon
      @click="toggleDarkmode"
      class="text-2xl cursor-pointer transition-colors duration-300 dark:hover:bg-white hover:bg-black rounded-full"
      :icon="['fas', 'circle-half-stroke']"
      />
    </span>
   
    <NuxtLink class="w-6 cursor-pointer" :to="$t('navbar.sigle')=='En' ? switchLocalePath('fr') : switchLocalePath('en')" title="Change language">
      {{ $t('navbar.sigle') }}
    </NuxtLink>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      dark: false
    }
  },
  methods: {
    toggleDarkmode(){
      this.dark = !this.dark;
      if(this.dark){
        document.documentElement.classList.add('dark');
      }else{
        document.documentElement.classList.remove('dark');
      }
    },
    toggleLanguage: function(){
      if(this.$i18n.locale == 'fr'){
        switchLocalePath('en');
      }else{
        switchLocalePath('fr');
      }
    }
  }
});
</script>