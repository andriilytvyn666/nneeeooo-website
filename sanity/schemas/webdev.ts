import {Rule} from 'sanity'

export default {
  title: 'Webdev',
  name: 'webdev',
  type: 'document',
  fields: [
    {
      name: 'webdev',
      type: 'array',
      of: [{type: 'webdevItem'}],
      validate: (rule: Rule) => rule.min(1).required(),
    },
  ],
}
