<template>
  <div class="flex flex-col justify-between h-svh overflow-scroll">
    <NuxtLink to="/" class="z-10 absolute top-6 left-6">{{
      '<- back'
    }}</NuxtLink>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-svh"
    >
      <img
        v-for="i in [...Array(15).keys()]"
        :key="i"
        src="public/design.jpg"
        class="aspect-[1/1.414]"
      />
    </div>
  </div>
</template>
