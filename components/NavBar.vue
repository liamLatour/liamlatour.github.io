<template>
<div class="w-full flex justify-around items-center
flex-col sm:flex-row">
  <div class="w-full flex justify-between">
    <NuxtLink :to="localePath('index')" class="sm:text-5xl sm:my-auto my-2 text-4xl" aria-label="Home">
      <font-awesome-icon
      class="transition-transform duration-300 hover:rotate-[30deg]"
      :icon="['fas', 'asterisk']"
    />
    </NuxtLink>
    <span class="cursor-pointer text-3xl my-2 sm:my-auto sm:hidden" @click="navbarVisible=!navbarVisible" >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </span>
  </div>

  <div class="flex gap-8 items-center mb-10 sm:m-auto
  flex-col sm:flex-row" v-if="navbarVisible || bigScreen">
    <div class="flex gap-6 items-center
    flex-col sm:flex-row">
      <NavBarLink class="shrink-0" to="about" :text="$t('navbar.about')" title="About page"/>
      <NavBarLink class="shrink-0" to="projects" :text="$t('navbar.projects')" title="Projects"/>
      <NavBarLink class="shrink-0" to="contact" :text="$t('navbar.contact')" title="Contact"/>
    </div>

    <div class="flex gap-8">
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
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      dark: false,
      navbarVisible: false,
      bigScreen: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    onResize() {
      this.bigScreen = window.innerWidth>=640;
    },
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