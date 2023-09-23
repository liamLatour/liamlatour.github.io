<template>
  <div class="flex flex-col justify-around items-start gap-16 lg:flex-row">
    <div class="shrink grow basis-0">
      <h1 class="text-5xl mb-10 font-semibold">
        {{ $t('contact.title') }}
      </h1>
      <h3 class="">
        {{$t('contact.text')}} <a class="font-bold" href="mailto:liam.latour@gmail.com">liam.latour@gmail.com</a>
      </h3>
      <div class="mt-8 text-xl flex gap-8 justify-center">
        <a href="https://www.linkedin.com/in/liam-latour-937171222" class="p-3">
          <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
        </a>
        <a href="https://github.com/liamLatour" class="p-3">
          <font-awesome-icon :icon="['fab', 'github']"/>
        </a>
      </div>
    </div>

    <div class="shrink grow basis-0 w-full">
      <h1 class="text-5xl mb-10 font-semibold">
        {{ $t('workedwith.title') }}
      </h1>
      <h3 class="">
        {{ $t('workedwith.text') }}
      </h3>
      <div class="mt-8 flex justify-center gap-8 text-lg font-semibold">
        <a href="https://lmge.uca.fr/">LMGE</a>
        <a href="https://www.airliquide.com/">Air Liquide</a>
        <a href="https://www.beckers-group.com/">Beckers Group</a>
      </div>
    </div>
  </div>
</template>