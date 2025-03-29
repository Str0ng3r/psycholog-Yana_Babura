<script lang="ts" setup>
const props = defineProps({
	title: String,
	desc: Array,
	icon: String,
	button: Boolean,
});
</script>

<template>
	<div class="card_servise">
		<nuxt-icon :name="icon" filled v-if="icon" class="icon_card"></nuxt-icon>
		<h2>{{ title }}</h2>
		<li v-for="item in desc">{{ item }}</li>
		<button class="button_call" v-if="button">ЗАПИСАТЬСЯ</button>
	</div>
</template>

<style scoped lang="scss">
.button_call {
	padding: 1.8rem 4rem;
	border-radius: 1rem;
	background: #b87869;
	color: #fff;
	text-align: center;
	font-family: Jost;
	font-size: 1.4rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3rem; /* 214.286% */
	margin-top: 2rem;
}
.card_servise {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding: 1.8rem 3rem;
	background-color: #ffffff;
	border-radius: 1rem;
	min-height: 37.5rem;
	.icon_card {
		margin-bottom: 2rem;
	}
	h2 {
		color: #5d3127;
		text-align: center;
		font-family: Podkova;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.5rem; /* 156.25% */
		margin-bottom: 2rem;
	}
	li {
		color: #666;
		text-align: center;
		font-family: Jost;
		font-size: 1.3rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.8rem; /* 138.462% */
	}
}
</style>
