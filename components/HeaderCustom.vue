<script lang="ts" setup></script>

<template>
	<header>
		<div class="wrap_logo">
			<nuxt-icon name="Logo" filled></nuxt-icon>
			<p>Yana Babura</p>
		</div>
		<button class="button_header">Записаться</button>
	</header>
</template>

<style scoped lang="scss">
header {
	width: 100%;
	padding: 2rem 7rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.wrap_logo {
		gap: 2rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		p {
			color: #5d3127;
			font-family: Podkova;
			font-size: 4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 9.5rem; /* 237.5% */
		}
	}
	.button_header {
		border-radius: 1rem;
		background: #b97363;
		padding: 2rem 4rem;
		color: #fff;
		font-family: Jost;
		font-size: 2rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2.7rem; /* 192.857% */
		text-transform: capitalize;
	}
}
</style>
