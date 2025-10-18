import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {EarthGlobeIcon} from '@sanity/icons'

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
              .icon(EarthGlobeIcon)
              .child(S.document().title('Webdev').schemaType('webdev').documentId('webdev')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['webdev', 'webdevItem', 'designItem', 'media.tag'].includes(
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
