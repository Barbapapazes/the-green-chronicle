import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto', 'Noto fallback', ...fontFamily.sans],
      },
    },
  },
}
