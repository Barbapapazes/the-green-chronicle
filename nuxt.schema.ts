import { group, field } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    app: group({
      title: 'App',
      description: 'The app configuration.',
      icon: 'i-mdi-apps',
      fields: {
        name: field({
          type: 'string',
          title: 'Name',
          description: 'The name of the app.',
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description: 'The description of the app.',
        }),
      },
    }),
    header: group({
      title: 'Header',
      description: 'The header configuration.',
      icon: 'i-mdi-menu',
      fields: {
        links: field({
          type: 'array',
          title: 'Links',
          description: 'The links in the header.',
          default: [],
        }),
      },
    }),
    footer: group({
      title: 'Footer',
      description: 'The footer configuration.',
      icon: 'i-mdi-menu',
      fields: {
        links: field({
          type: 'array',
          title: 'Links',
          description: 'The links in the footer.',
          default: [],
        }),
        copyrightNotice: field({
          type: 'string',
          title: 'Copyright Notice',
          description: 'The notice of the copyright.',
        }),
        smallLinks: field({
          type: 'array',
          title: 'Small Links',
          description: 'The small links in the footer.',
          default: [],
        }),
      },
    }),
    page: group({
      title: 'Page',
      description: 'The page configuration.',
      icon: 'i-mdi-book-open-page-variant',
      fields: {
        article: group({
          title: 'Article',
          description: 'The article configuration.',
          fields: {
            cta: group({
              title: 'Call to Action',
              description: 'The call to action configuration.',
              fields: {
                label: field({
                  type: 'string',
                  title: 'Label',
                  description: 'The label of the call to action.',
                }),
                to: field({
                  type: 'string',
                  title: 'To',
                  description: 'The destination of the call to action.',
                }),
              },
            }),
          },
        }),
      },
    }),
    socials: field({
      type: 'array',
      title: 'Socials',
      icon: 'i-mdi-share-variant',
      description: 'The socials configuration.',
      default: [],
    }),
  },
})
