// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: "@use '@/assets/styles/main.scss';",
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
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},
	plugins: [{ src: '~/plugins/aos.js', mode: 'client' }],
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', 'nuxt-icons'],
});
