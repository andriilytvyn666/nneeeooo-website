import {Rule} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default {
  title: 'Design',
  name: 'design',
  type: 'document',
  icon: ImagesIcon,
  preview: {
    select: {
      title: 'date',
      media: 'posts.0.preview',
      mediaType: 'posts.0.preview._type',
    },
    prepare({title, media, mediaType}) {
      return {
        title: new Date(title).toLocaleDateString('en', {year: 'numeric', month: 'long'}),
        media: media,
        mediaType: mediaType,
      }
    },
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'MMMM, YYYY',
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'posts',
      type: 'array',
      of: [{type: 'designItem'}],
      validate: (rule: Rule) => rule.min(1).required(),
    },
  ],
}
