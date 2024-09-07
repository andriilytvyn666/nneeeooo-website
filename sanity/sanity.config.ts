import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'andrii-lytvyn-portfolio',

  projectId: '5zmqw6cj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Main')
          .items([
            S.listItem()
              .title('Webdev')
              .child(S.document().title('Webdev').schemaType('webdev').documentId('webdev')),
            S.listItem()
              .title('Anime favorites')
              .child(
                S.document()
                  .title('Anime favorites')
                  .schemaType('animeFavorites')
                  .documentId('animeFavorites'),
              ),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['webdev', 'webdevItem', 'media.tag', 'animeFavorites'].includes(
                  `${listItem.getId()}`,
                ),
            ),
          ]),
    }),
    media(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
