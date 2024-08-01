import { defineStore } from 'pinia'

export const useSanityStore = defineStore('sanity-store', () => {
  const content = ref<Content>()
  const design = ref<designItem[]>()

  const sanityFetch = async <T>(ref: Ref, query: string): Promise<T> => {
    if (ref.value !== undefined) return ref.value

    const { data } = await useSanityQuery<T>(query)
    ref.value = data.value

    return ref.value
  }

  const getContent = async (): Promise<Content> =>
    sanityFetch<Content>(
      content,
      groq`*[_type == "content"][0] { photos, webdev }`
    )

  const getDesign = async (): Promise<designItem[]> =>
    sanityFetch<designItem[]>(
      design,
      groq`*[_type == "design"] {'images': images[].asset, date} | order(date desc)`
    )

  return {
    getContent,
    getDesign,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSanityStore, import.meta.hot))
}
