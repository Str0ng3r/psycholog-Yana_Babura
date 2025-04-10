// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		optimizeDeps: {
			include: ['date-fns', '@splinetool/runtime'],
		},
		build: {
			minify: 'esbuild', // Быстрее и меньше
			rollupOptions: {
				treeshake: true,
			},
		},
		assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif'],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use './assets/styles/main.scss' as *;  @use "./assets/styles/media.scss" as *;`,
				},
			},
		},
	},

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
			title: 'Психолог Yana Babura – Помощь и консультации онлайн | Познань',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content:
						'Психологические консультации онлайн и офлайн. Работаем с тревожностью, стрессом, самооценкой.Познань',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content:
						'психолог,психолог онлайн, психолог Познань, консультация психолога, семейный психолог, психолог для детей, стресс, депрессия, тревога, панические атаки, проблемы в отношениях, повышение самооценки, кризис, эмоциональное выгорание, фобии, коучинг, психотерапевт, психоанализ, когнитивно-поведенческая терапия, помощь при разводе, психолог для подростков, личностный рост',
				},
				{
					property: 'og:title',
					content:
						'Психолог Yana Babura — Онлайн-консультации и приём в Познани',
				},
				{
					property: 'og:description',
					content:
						'Консультации с дипломированным психологом и игропрактиком. Онлайн и офлайн приём. Работа с тревогами, стрессами, самооценкой.',
				},
				{
					property: 'og:image',
					content: '/ogImage.webp', // как выше
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					property: 'og:url',
					content: 'https://online-psycholog-yanababura.com', // замени на свой реальный сайт
				},
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				// {
				// 	rel: 'preload',
				// 	as: 'image',
				// 	href: '/assets/img/mainphoto.webp', // путь относительно /public
				// },
			],
		},
	},

	plugins: [{ src: '~/plugins/aos.js', mode: 'client' }],
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', 'nuxt-icons', '@nuxtjs/sitemap'],
	sitemap: {
		hostname: 'https://online-psycholog-yanababura.com', // Укажи домен
		routes: async () => {
			return [
				'/',
				'/about',
				'/uslugi',
				'/kontakt', // перечисли все доступные URL
			];
		},
	},
});
