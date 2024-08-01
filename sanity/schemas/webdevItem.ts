import {Rule} from 'sanity'

export default {
  title: 'Webdev',
  name: 'webdevItem',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail43',
      mediaType: 'thumbnail43._type',
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
      name: 'thumbnail169',
      title: 'Thumbnail Desktop',
      description: '16:9 thumbnail',
      type: 'image',
      of: [{type: 'image/*'}],
      validate: (rule: Rule) => rule.required(),
    },
    {
      name: 'thumbnail43',
      title: 'Thumbnail Mobile',
      description: '4:3 thumbnail',
      type: 'image',
      of: [{type: 'image/*'}],
      validate: (rule: Rule) => rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      validate: (rule: Rule) => rule.min(1).max(64).required(),
    },
    {
      name: 'description',
      type: 'string',
      validate: (rule: Rule) => rule.min(1).max(512).required(),
    },
    {
      name: 'stack',
      type: 'string',
      validate: (rule: Rule) => rule.min(1).max(512).required(),
    },
    {
      name: 'link',
      type: 'url',
      validate: (rule: Rule) => rule.uri().required(),
    },
  ],
}
