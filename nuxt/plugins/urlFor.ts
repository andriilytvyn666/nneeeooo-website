import imageUrlBuilder from '@sanity/image-url'

export default defineNuxtPlugin(() => {
  const config = useSanity().config
  const builder = imageUrlBuilder({
    dataset: !config.dataset ? 'production' : config.dataset,
    projectId: config.projectId,
  })

  function urlFor(source: image) {
    return builder.image(source).auto('format')
  }

  return {
    provide: { urlFor },
  }
})
