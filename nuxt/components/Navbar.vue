<template>
  <div class="flex justify-between pb-3 md:pb-4">
    <Button
      text="homepage"
      icon="mdi:arrow-left"
      href="/"
      target="_self"
      class="justify-center w-full sm:w-fit"
    />
    <slot />
  </div>
</template>

<script lang="ts" setup></script>
