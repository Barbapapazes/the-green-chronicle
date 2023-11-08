import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto', 'Noto fallback', ...fontFamily.sans],
      },
      // // remove margin from first child in prose from typography
      // typography: theme => ({
      //   DEFAULT: {
      //     css: {
      //       'p:first-child': {
      //         marginTop: '0 !important',
      //       },
      //     },
      //   },
      // }),
    },
  },
}
