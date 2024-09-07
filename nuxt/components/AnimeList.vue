<template>
  <div
    class="flex flex-col h-full overflow-scroll border-t border-r border-fg3"
  >
    <h1 class="flex items-center gap-2 p-6 font-stretch text-body-alt">
      <span>{{ caption.toUpperCase() }}</span>
    </h1>
    <div class="flex flex-col gap-6 p-6 pt-0 overflow-scroll">
      <div v-for="entry in data" :key="entry.media.id" class="flex gap-4">
        <img
          :src="entry.media.coverImage.medium"
          class="aspect-[3/4.375] w-[3rem]"
        />
        <div class="flex flex-col gap-1">
          <h2 class="line-clamp-1">{{ entry.media.title.romaji }}</h2>
          <h2 class="line-clamp-1 text-[#777777]">
            {{ entry.media.title.native }}
          </h2>
          <h2 class="line-clamp-1 text-[#777777]">
            {{
              new Date(
                entry.media.startDate.year,
                entry.media.startDate.month - 1,
                entry.media.startDate.day
              ).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })
            }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  caption: string
  data: entry[]
}>()
</script>
