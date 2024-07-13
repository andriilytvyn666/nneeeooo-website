import {Rule} from 'sanity'

export default {
  name: 'content',
  type: 'document',
  fields: [
    {
      name: 'designs',
      type: 'array',
      of: [{type: 'image'}],
      validate: (rule: Rule) => rule.min(1).required(),
    },
    {
      name: 'photos',
      type: 'array',
      of: [{type: 'image'}],
      validate: (rule: Rule) => rule.min(1).required(),
    },
  ],
}
