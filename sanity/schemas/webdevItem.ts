import {Rule} from 'sanity'

export default {
  title: 'Webdev Item',
  name: 'webdevItem',
  type: 'document',
  fields: [
    {
      name: 'thumbnail',
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
