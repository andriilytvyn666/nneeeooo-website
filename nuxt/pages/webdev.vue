<template>
  <div class="flex flex-col justify-between h-svh overflow-scroll">
    <NuxtLink to="/" class="absolute top-6 left-6 z-10">{{
      '<- back'
    }}</NuxtLink>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-svh"
    >
      <CardWeb
        v-for="i in [...Array(15).keys()]"
        :key="i"
        title="Vasily Richter"
        subtitle="Website for Ukrainian indie musician"
        link="https://rihterb.pp.ua"
      />
    </div>
  </div>
</template>
