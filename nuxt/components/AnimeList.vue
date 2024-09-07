<template>
  <div
    class="flex flex-col h-full overflow-scroll border-t border-r border-fg3"
  >
    <h1
      class="flex flex-row-reverse items-center gap-2 p-3 w-fit md:p-6 font-stretch text-body-alt"
      @click="collapsed = !collapsed"
    >
      <div class="xl:hidden">
        <Icon
          name="mdi:chevron-down"
          size="20"
          :class="`${collapsed ? '-rotate-90' : ''} transition-transform duration-300`"
        />
      </div>

      <span>{{ caption.toUpperCase() }}</span>
    </h1>
    <div
      :class="`flex flex-col px-4 sm:px-6 overflow-scroll ${collapsed ? 'max-h-0 xl:max-h-[2048rem]' : 'max-h-[256rem]'} md:transition-max-height duration-300`"
    >
      <div
        v-for="entry in data"
        :key="entry.media.id"
        class="flex gap-4 pb-6 first:pt-2"
      >
        <img
          :src="entry.media.coverImage.medium"
          class="aspect-[3/4.375] w-[3rem]"
        />
        <div class="flex flex-col gap-1">
          <h2 class="line-clamp-1">
            {{ entry.media.title.romaji }}
          </h2>
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

const collapsed = ref<boolean>(false)
</script>

<style lang="postcss" scoped>
h1 {
  font-variant-ligatures: none;
}
</style>
