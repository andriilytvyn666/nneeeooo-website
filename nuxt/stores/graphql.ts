import { defineStore } from 'pinia'
import { gql } from 'nuxt-graphql-request/utils'

export const useGraphQlStore = defineStore(
  'graphql-store',
  () => {
    const completed = ref<entry[]>()
    const planning = ref<entry[]>()
    const current = ref<entry[]>()

    const { $graphql } = useNuxtApp()

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

    const graphQlFetch = async <T>(
      ref: Ref,
      query: string,
      variables: object
    ): Promise<T> => {
      if (ref.value !== undefined) return ref.value

      const data: queryData = await $graphql.anilist.request(query, variables)

      ref.value = data.MediaListCollection.lists[0].entries

      return ref.value
    }

    const getCompleted = async (): Promise<Webdev> => {
      const vars = {
        userId: 6365420,
        status: 'COMPLETED',
        sort: 'FINISHED_ON_DESC',
      }

      return graphQlFetch<Webdev>(completed, query, vars)
    }

    const getPlanning = async (): Promise<Webdev> => {
      const vars = {
        userId: 6365420,
        status: 'PLANNING',
        sort: 'ADDED_TIME_DESC',
      }

      return graphQlFetch<Webdev>(planning, query, vars)
    }

    const getCurrent = async (): Promise<Webdev> => {
      const vars = {
        userId: 6365420,
        status: 'CURRENT',
        sort: 'PROGRESS_DESC',
      }

      return graphQlFetch<Webdev>(current, query, vars)
    }

    return {
      getCompleted,
      getPlanning,
      getCurrent,
    }
  },
  { persist: true }
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSanityStore, import.meta.hot))
}
