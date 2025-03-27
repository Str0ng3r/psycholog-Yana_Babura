// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	imports: {
		dirs: ['types/constants'],
		presets: [
			{
				from: 'vue',
				imports: ['withDefaults', 'defineProps', 'defineEmits'],
			},
			{
				from: 'date-fns',
				imports: ['format'],
			},
			{
				from: '@splinetool/runtime',
				imports: ['Application'],
			},
		],
	},
	app: {
		head: {
			title: 'Title',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content: 'тут должно быть описание сайта и услуг',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'тут должны быть ключевые слова',
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},
	plugins: [{ src: '~/plugins/aos.js', mode: 'client' }],
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@nuxt/icon'],
});
