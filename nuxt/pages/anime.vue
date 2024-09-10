<template>
  <div class="flex">
    <ButtonBack caption="anime" />
    <div class="flex flex-col w-full overflow-scroll h-dvh">
      <Navbar caption="anime" class="sticky top-0 z-10 lg:hidden" />
      <div class="flex flex-col">
        <h1
          class="flex items-center justify-between p-3 lg:p-6 font-stretch text-body-alt"
        >
          <div
            class="flex flex-row-reverse gap-2 w-fit"
            @click="favCollapsed = !favCollapsed"
          >
            <!-- some bullshit -->
            <Icon
              name="mdi:chevron-down"
              size="20"
              :class="`${favCollapsed ? '-rotate-90' : ''} transition-transform duration-300`"
            />
            <span>
              {{ 'favorites'.toUpperCase() }}
            </span>
          </div>
          <NuxtLink
            :to="favSanity.externalLink"
            target="_blank"
            class="flex items-center gap-2 text-fg2"
          >
            <Icon name="simple-icons:anilist" />
            <span class="hidden lg:flex">ANILIST</span>
          </NuxtLink>
        </h1>
        <div
          :class="`${favCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-[64rem]'} md:transition-max-height  duration-300 w-full overflow-scroll sm:overflow-hidden grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10`"
        >
          <NuxtLink
            v-for="item in fav"
            :key="item.media.id"
            :to="item.media.siteUrl"
            target="_blank"
            class="relative w-full h-full group"
          >
            <div
              class="absolute z-10 hidden w-full h-full opacity-0 md:flex group-hover:opacity-75 bg-bg"
            />
            <div
              class="absolute z-20 hidden bottom-0 md:flex opacity-0 group-hover:opacity-100 px-3.5 pb-3 flex-col"
            >
              <h1 class="line-clamp-1">{{ item.media.title.romaji }}</h1>
              <h2 class="line-clamp-1 text-[#777777]">
                {{ item.media.title.native }}
              </h2>
              <h3 class="line-clamp-1 text-[#777777]">
                {{
                  new Date(
                    item.media.startDate.year,
                    item.media.startDate.month - 1,
                    item.media.startDate.day
                  ).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                }}
              </h3>
            </div>
            <img
              :src="item.media.coverImage.extraLarge"
              class="aspect-[320/460] w-full"
            />
          </NuxtLink>
        </div>
      </div>
      <div
        class="grid w-full xl:overflow-scroll h-fit xl:grid-cols-3 last:border-b border-fg3"
      >
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
            siteUrl
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
