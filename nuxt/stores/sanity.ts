import { defineStore } from 'pinia'

export const useSanityStore = defineStore('sanity-store', () => {
  const design = ref<designItem[]>()
  const photo = ref<photoItem[]>()
  const webdev = ref<Webdev>()

  const sanityFetch = async <T>(ref: Ref, query: string): Promise<T> => {
    if (ref.value !== undefined) return ref.value

    const { data } = await useSanityQuery<T>(query)
    ref.value = data.value

    return ref.value
  }

  const getWebdev = async (): Promise<Webdev> =>
    sanityFetch<Webdev>(webdev, groq`*[_type == "webdev"][0] { webdev }`)

  const getDesign = async (): Promise<designItem[]> =>
    sanityFetch<designItem[]>(
      design,
      groq`*[_type == "design"] {'images': images[], date} | order(date desc)`
    )

  const getPhoto = async (): Promise<photoItem[]> =>
    sanityFetch<photoItem[]>(
      photo,
      groq`*[_type == "photo"] {'images': images[], date} | order(date desc)`
    )

  return {
    getDesign,
    getPhoto,
    getWebdev,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSanityStore, import.meta.hot))
}
