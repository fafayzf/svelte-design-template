import { resolve } from 'path'
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { preprocessMeltUI, sequence } from '@melt-ui/pp'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([
    vitePreprocess(),
    preprocessMeltUI()
  ]),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
    alias: {
      '$components': resolve('./src/components'),
      '$utils': resolve('./src/utils'),
      '$routes': resolve('./src/routes'),
      '$store': resolve('./src/store')
    },
    files: {
      hooks: {
        client: 'src/hooks/client',
        server: 'src/hooks/server',
      }
    }
	}
}

export default config
