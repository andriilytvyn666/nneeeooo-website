<template>
  <div class="flex flex-col justify-between overflow-scroll h-svh">
    <NuxtLink to="/" class="absolute z-10 px-3 py-2 bg-bg top-6 left-6">{{
      '<- back'
    }}</NuxtLink>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
