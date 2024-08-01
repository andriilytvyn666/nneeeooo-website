import {Rule} from 'sanity'

export default {
  title: 'Design',
  name: 'design',
  type: 'document',
  preview: {
    select: {
      title: 'date',
      media: 'images.0',
      mediaType: 'images.0._type',
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
      name: 'images',
      description: '0.3x of A2, sRGB, 72dpi',
      type: 'array',
      of: [{type: 'image'}],
      validate: (rule: Rule) => rule.min(1).required(),
    },
  ],
}
