<script lang="ts" setup></script>

<template>
	<footer>
		<div class="wrap_footer_info">
			<div class="wrap_logo">
				<nuxt-icon name="Logo" filled></nuxt-icon>
				<p>Yana Babura</p>
			</div>
			<p class="footer_text">
				Firm offer any posible carpentry and carpentry administrations you may
				require. adore finding
			</p>
			<div class="wrap_call_button">
				<button class="wrap_call_button__button">
					<nuxt-icon name="phone_call" filled></nuxt-icon>
				</button>
				<p class="wrap_call_button__number">
					<span>Бесплатный вызов</span>+48000000000
				</p>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="scss">
footer {
	background: url('../assets/img/back_footer.png') no-repeat center;
	width: 100%;
	padding: 6rem 15rem 2rem 15rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}
.wrap_footer_info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-right: 10rem;
}
.wrap_logo {
	gap: 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 3rem;
	p {
		color: #ffffff;
		font-family: Podkova;
		font-size: 4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 9.5rem; /* 237.5% */
	}
}
.footer_text {
	color: #fefefe;
	font-family: Jost;
	font-size: 1.7rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2.8rem; /* 164.706% */
	margin-bottom: 2rem;
	opacity: 0.8;
	max-width: 26rem;
}
.wrap_call_button {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1.6rem;
}
.wrap_call_button__button {
	width: 4.3rem;
	height: 4.3rem;
	border-radius: 50%;
	background-color: #e9b2a4;
	display: flex;
	align-items: center;
	justify-content: center;
}
.wrap_call_button__number {
	color: #fff;
	font-family: Jost;
	font-size: 1.7rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2.7rem; /* 158.824% */
	opacity: 0.8;
	display: flex;
	flex-direction: column;
	span {
		color: #fff;
		font-family: Jost;
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.7rem; /* 192.857% */
	}
}
</style>
