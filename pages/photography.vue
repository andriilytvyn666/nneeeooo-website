<template>
  <div class="flex flex-col justify-between h-svh overflow-scroll">
    <NuxtLink to="/" class="z-10 absolute top-6 left-6">{{
      '<- back'
    }}</NuxtLink>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 h-svh">
      <img
        v-for="i in [...Array(19).keys()]"
        :key="i"
        src="public/photography.JPG"
        class="aspect-[4/3]"
      />
    </div>
  </div>
</template>
