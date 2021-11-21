import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { resolve } from 'pathe'

export default defineConfig({
	plugins: [
		Vue(),
		WindiCSS(),
		VitePWA(),
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/, // .md
			],
			imports: ['vue', 'vue-router'],
		}),
		Components({
			dts: true,
			resolvers: [
				IconsResolver({
					prefix: false,
				}),
			],
		}),
		Pages(),
		Icons({
			autoInstall: true,
		}),
	],
	resolve: {
		alias: {
			'~~': __dirname,
			'~': resolve(__dirname, 'src'),
		},
	},
})
