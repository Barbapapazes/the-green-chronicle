export default defineAppConfig({
  ui: {
    primary: 'yellow',
    gray: 'stone',
    button: {
      base: 'transition ease-in',
    },
    card: {
      shadow: '',
      divide: '',
      ring: '',
      header: {
        padding: 'px-0 py-0 sm:px-0',
      },
      body: {
        padding: 'px-0 py-0 pt-4 sm:!pt-4 sm:p-0',
      },
      footer: {
        base: '',
        padding: 'px-0 py-0 pt-4 sm:px-0',
      },
    },
  },
  app: {
    name: 'The Green Chronicle',
    description: 'A blog about sustainable living and eco-friendly practices.',
  },
  header: {
    links: [
      {
        label: 'Seasonal Guides',
        to: '/categories/seasonal-guides',
      },
      {
        label: 'Environmental Impacts',
        to: '/categories/environmental-impacts',
      },
      {
        label: 'Sustainable Practices',
        to: '/categories/sustainable-practices',
      },
      {
        label: 'Customer Stories',
        to: '/categories/customer-stories',
      },
      {
        label: 'Behind the Scenes',
        to: '/categories/behind-the-scenes',
      },
    ],
  },
  footer: {
    links: [
      {
        label: 'Product',
        children: [
          {
            label: 'Features',
            to: '#',
          },
          {
            label: 'Pricing',
            to: '#',
          },
          {
            label: 'Integrations',
            to: '#',
          },
          {
            label: 'Security',
            to: '#',
          },
        ],
      },
      {
        label: 'Shop',
        children: [
          {
            label: 'Plants',
            to: '#',
          },
          {
            label: 'Pots',
            to: '#',
          },
          {
            label: 'Accessories',
            to: '#',
          },
          {
            label: 'Gifts',
            to: '#',
          },
        ],
      },
      {
        label: 'Company',
        children: [
          {
            label: 'About',
            to: '#',
          },
          {
            label: 'Blog',
            to: '#',
          },
          {
            label: 'Careers',
            to: '#',
          },
          {
            label: 'Press',
            to: '#',
          },
        ],
      },
      {
        label: 'Ecosystem',
        children: [
          {
            label: 'Orion',
            to: 'https://orion.barbapapazes.dev',
            target: '_blank',
          },
          {
            label: 'Slantire',
            to: 'https://slantire.barbapapazes.dev',
            target: '_blank',
          },
          {
            label: 'Cub\'IA',
            to: 'https://cub-ia.barbapapazes.dev',
            target: '_blank',
          },
        ],
      },
    ],
    copyrightNotice: '© 2023 The Green Chronicle. All rights reserved.',
    smallLinks: [
      {
        label: 'Privacy Policy',
        to: '#',
      },
      {
        label: 'Terms of Service',
        to: '#',
      },
      {
        label: 'Support my Work',
        to: 'https://github.com/sponsors/barbapapazes',
        target: '_blank',
      },
    ],
  },
  page: {
    article: {
      cta: {
        label: 'Contact Us',
        to: '/#',
      },
    },
  },
  socials: [{
    name: 'X',
    to: 'https://x.com/soubiran_',
    icon: 'i-simple-icons-x',
    target: '_blank',
    rel: 'noopener noreferrer',
  }, {
    name: 'GitHub',
    to: 'https://github.com/barbapapazes/the-green-chronicle',
    icon: 'i-simple-icons-github',
    target: '_blank',
    rel: 'noopener noreferrer',
  }, {
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/esteban25/',
    icon: 'i-simple-icons-linkedin',
    target: '_blank',
    rel: 'noopener noreferrer',
  }],
})
