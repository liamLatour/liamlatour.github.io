<template>
  <div class="flex flex-wrap justify-center gap-10">
    <ProjectItem v-for="(item, index) in projects" :key="index"
      class="grow"
      :description="$t('projects.items.'+item.id+'.description')"
      :title="$t('projects.items.'+item.id+'.title')"
      :image=item.image
      :technologies=item.technologies
      :url="item.url"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsGallery",
  data(){
    return {
      projects: [
        {
          id: "C_Mandelbrot",
          image: "https://raw.githubusercontent.com/liamLatour/C_Mandelbrot/master/example.png",
          url: "https://github.com/liamLatour/C_Mandelbrot",
          technologies: ["C"]
        },
        {
          id: "MiTV",
          image: "https://raw.githubusercontent.com/liamLatour/MiTV/master/screenshot.png",
          url: "https://github.com/liamLatour/MiTV",
          technologies: ["Python", "Flask", "Vue", "TypeScript"]
        },
        {
          id: "DaphnieMaton",
          image: "https://raw.githubusercontent.com/liamLatour/DaphnieMaton/master/Images/Capture%20d'%C3%A9cran%202023-09-20%20081151.png",
          url: "https://github.com/liamLatour/DaphnieMaton",
          technologies: ["Python", "Arduino"]
        },
        {
          id: "LIDAR-SI",
          image: "https://raw.githubusercontent.com/liamLatour/LIDAR-SI/master/screenshot.png",
          url: "https://github.com/liamLatour/LIDAR-SI",
          technologies: ["Python", "Matlab"]
        },
        {
          id: "Cocon-Carma",
          image: "https://raw.githubusercontent.com/liamLatour/Cocon-Carma/master/screenshot.png",
          url: "https://github.com/liamLatour/Cocon-Carma",
          technologies: ["Cordova", "JS"]
        },
        {
          id: "DynamicQRCode",
          image: "https://raw.githubusercontent.com/liamLatour/DynamicQRCode/master/screenshot.png",
          url: "https://github.com/liamLatour/DynamicQRCode",
          technologies: ["Python", "Flask"]
        },
        {
          id: "faircorp",
          image: "https://raw.githubusercontent.com/liamLatour/faircorp/master/Screenshot%20from%202023-09-20%2013-55-38.png",
          url: "https://github.com/liamLatour/faircorp",
          technologies: ["Java", "Spring"]
        },
        {
          id: "Pro-Tech",
          image: "https://raw.githubusercontent.com/liamLatour/Pro-Tech/main/Screenshot%20from%202023-09-20%2011-11-58.png",
          url: "https://github.com/liamLatour/Pro-Tech",
          technologies: ["JS"]
        },
        {
          id: "Hello-Whitespace",
          image: "https://raw.githubusercontent.com/liamLatour/Hello-Whitespace/main/Screenshot%20from%202023-09-20%2010-39-25.png",
          url: "https://github.com/liamLatour/Hello-Whitespace",
          technologies: ["Whitespace"]
        },
        {
          id: "Scan-BDE-BP",
          image: "https://raw.githubusercontent.com/liamLatour/BDE-Blaise-Pascal/master/Scan-BDE-BP/screenshot.png",
          url: "https://github.com/liamLatour/BDE-Blaise-Pascal/tree/master/Scan-BDE-BP",
          technologies: ["Cordova", "JS", "JQuery"]
        },
        {
          id: "PersonalPage",
          image: "https://raw.githubusercontent.com/liamLatour/liamlatour.github.io/main/screenshot.png",
          url: "https://github.com/liamLatour/liamlatour.github.io/",
          technologies: ["Vue", "TypeScript"]
        }
      ]
    }
  }
});
</script>