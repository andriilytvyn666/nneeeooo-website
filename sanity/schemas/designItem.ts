import {Rule} from 'sanity'

export default {
  title: 'Design Item',
  name: 'designItem',
  type: 'document',
  preview: {
    select: {
      media: 'preview',
      mediaType: 'preview._type',
    },
    prepare({title, media, mediaType}) {
      return {
        title: title,
        media: media,
        mediaType: mediaType,
      }
    },
  },
  fields: [
    {
      name: 'preview',
      description: '0.3x of A2, sRGB, 72dpi',
      type: 'image',
      validate: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      description: '(optional)',
      type: 'url',
    },
  ],
}
