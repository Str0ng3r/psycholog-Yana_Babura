<script lang="ts" setup>
const props = defineProps({
	title: String,
	desc: String,
	stars: Number,
});
</script>

<template>
	<div class="card_review">
		<h2>{{ title }}</h2>
		<p>{{ desc }}</p>
		<div class="wrap_stars">
			<nuxt-icon name="star_review" v-for="item in stars" filled></nuxt-icon>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card_review {
	width: 100%;
	padding: 4rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	.wrap_stars {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 0.5rem;
	}
	h2 {
		color: #5b3128;
		font-family: Jost;
		font-size: 2.3rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.76rem; /* 120% */
	}
	p {
		color: #666;
		font-family: Jost;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.7rem; /* 192.857% */
	}
}
</style>
