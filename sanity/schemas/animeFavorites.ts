import {Rule} from 'sanity'

export default {
  title: 'Anime favorites',
  name: 'animeFavorites',
  type: 'document',
  fields: [
    {
      name: 'idList',
      title: 'ID List',
      description: 'List of Anilist anime IDs',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule: Rule) => rule.min(1).required(),
    },
    {
      title: 'External Link',
      name: 'externalLink',
      type: 'string',
      validation: (rule: Rule) => rule.min(1).required(),
    },
  ],
}
