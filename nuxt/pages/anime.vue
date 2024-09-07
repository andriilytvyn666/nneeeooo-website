<template>
  <div class="flex">
    <ButtonBack caption="anime" />
    <div class="flex flex-col w-full h-screen">
      <div class="flex flex-col">
        <h1 class="flex items-center gap-2 p-6 font-stretch text-body-alt">
          <Icon
            name="mdi:chevron-down"
            size="20"
            :class="`${favCollapsed ? '-rotate-90' : ''} transition-transform dration-300`"
          />
          <span @click="favCollapsed = !favCollapsed">FAVORITES</span>
        </h1>
        <div
          :class="`${favCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-[64rem]'} transition-max-height  duration-300 flex w-full overflow-scroll sm:overflow-hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8`"
        >
          <img
            v-for="item in fav"
            :key="item.media.id"
            :src="item.media.coverImage.extraLarge"
            class="min-w-[100vw] sm:min-w-0 h-fit sm:h-full sm:w-full"
          />
        </div>
      </div>
      <div class="grid w-full h-full grid-cols-3 overflow-scroll">
        <AnimeList caption="Planned" :data="planning.data.value!" />
        <AnimeList caption="Completed" :data="completed.data.value!" />
        <AnimeList caption="Current" :data="current.data.value!" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gql } from 'nuxt-graphql-request/utils'

const { $graphql } = useNuxtApp()

const favCollapsed = ref<boolean>(false)

const query = gql`
  query ($userId: Int, $status: MediaListStatus, $sort: [MediaListSort]) {
    MediaListCollection(
      userId: $userId
      status: $status
      type: ANIME
      sort: $sort
    ) {
      lists {
        entries {
          media {
            id
            title {
              english
              romaji
              native
            }
            coverImage {
              medium
              extraLarge
            }
            startDate {
              year
              month
              day
            }
          }
        }
      }
    }
  }
`

const planning = await useAsyncData('anilistPlanning', async () => {
  const data: queryData = await $graphql.anilist.request(query, {
    userId: 6365420,
    status: 'PLANNING',
    sort: 'ADDED_TIME_DESC',
  })
  return data.MediaListCollection.lists[0].entries
})

const completed = await useAsyncData(
  'anilistCompleted',
  async (): Promise<entry[]> => {
    const data: queryData = await $graphql.anilist.request(query, {
      userId: 6365420,
      status: 'COMPLETED',
      sort: 'FINISHED_ON_DESC',
    })
    return data.MediaListCollection.lists[0].entries
  }
)

const current = await useAsyncData('anilistCurrent', async () => {
  const data: queryData = await $graphql.anilist.request(query, {
    userId: 6365420,
    status: 'CURRENT',
    sort: 'PROGRESS_DESC',
  })
  return data.MediaListCollection.lists[0].entries
})

const store = useSanityStore()
const favSanity = await store.getAnimeFavorites()

const fav = [
  ...completed.data.value!.filter((entry) =>
    favSanity.idList.includes(entry.media.id.toString())
  ),
  ...planning.data.value!.filter((entry) =>
    favSanity.idList.includes(entry.media.id.toString())
  ),
  ...current.data.value!.filter((entry) =>
    favSanity.idList.includes(entry.media.id.toString())
  ),
].sort((a, b) => a.media.id - b.media.id)

useSeoMeta({
  title: '[andrii lytvyn] - anime',
})

useHead(head)
</script>
