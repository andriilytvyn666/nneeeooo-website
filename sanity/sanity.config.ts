import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
export default defineConfig({
  name: 'default',
  title: 'andrii-lytvyn-portfolio',

  projectId: '5zmqw6cj',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Main')
          .items([
            S.listItem()
              .title('Webdev')
              .child(S.document().title('Webdev').schemaType('webdev').documentId('webdev')),
            ...S.documentTypeListItems().filter(
              (listItem) => !['webdev', 'webdevItem'].includes(`${listItem.getId()}`)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
