d
<template>
  <NuxtLink
    :to="$props.link"
    class="flex aspect-[4/3] items-end custom-card-web hover:opacity-80"
  >
    <div class="flex flex-col gap-0 mx-4 my-4">
      <h2 class="text-title">{{ $props.title }}</h2>
      <h3>{{ $props.subtitle }}</h3>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  subtitle: string
  link: string
}>()
</script>

<style scoped>
.custom-card-web {
  background:
    linear-gradient(-180deg, rgba(0, 0, 0, 0%) 40%, #000000 90%),
    url('/public/CardWeb.jpg') no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
