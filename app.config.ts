export default defineAppConfig({
  ui: {
    primary: 'yellow',
    gray: 'stone',
    divider: {
      border: {
        base: 'border-stone-200',
      },
    },
    button: {
      base: 'transition ease-in',
    },
    tooltip: {
      background: 'bg-stone-50',
      color: 'text-stone-900',
      rounded: 'rounded',
      ring: 'ring-1 ring-stone-200',
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
    footer: {
      wrapper: 'bg-stone-50',
      top: {
        wrapper: 'bg-stone-200',
      },
    },
    header: {
      wrapper: 'bg-white backdrop-blur-none border-none relative',
      logo: 'flex-shrink-0 font-bold text-xl text-stone-900 flex items-end gap-1.5',
    },
    page: {
      header: {
        wrapper: 'relative border-b border-stone-200 py-8',
        title: 'text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight',
        description: 'mt-4 text-lg text-stone-500',
      },
    },
  },
  blog: {
    socials: {
      x: 'https://x.com/soubiran_',
      github: 'https://github.com/barbapapazes',
    },
    host: 'https://the-green-chronicle.esteban-soubiran.site',
  },
})
