<script lang="ts" setup></script>

<template>
	<header id="header">
		<div class="wrap_logo" data-aos="fade-right">
			<nuxt-icon name="Logo" filled class="icon_logotip"></nuxt-icon>
			<p>Yana Babura</p>
		</div>
		<a class="button_header" data-aos="fade-left" href="#form_sender"
			>Записаться</a
		>
	</header>
</template>

<style scoped lang="scss">
.icon_logotip svg {
	@include m {
		width: 7rem;
		height: 7rem;
	}
}
header {
	width: 100%;
	padding: 2rem 7rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@include mob {
		padding: 1rem 3rem;
	}
	.wrap_logo {
		gap: 2rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		@include m {
			gap: 1rem;
		}
		.icon_logotip:deep(svg) {
			@include mob {
				width: 6rem;
				height: 6rem;
			}
		}
		p {
			color: #5d3127;
			font-family: Podkova;
			font-size: 4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 9.5rem; /* 237.5% */
			@include m {
				font-size: 2.6rem;
				line-height: 4rem;
			}
			@include mob {
				font-size: 2rem;
				line-height: 2.2rem;
			}
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
		@include mob {
			padding: 1.2rem 2.4rem;
			font-size: 1.4rem;
			line-height: 1.8rem;
		}
	}
}
</style>
