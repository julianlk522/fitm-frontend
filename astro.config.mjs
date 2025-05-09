import preact from '@astrojs/preact'
import { defineConfig } from 'astro/config'

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  integrations: [
      preact({
          devtools: true,
      }),
	],

  adapter: node({
    mode: 'standalone',
  }),
})