<script lang="ts" setup></script>

<template>
	<footer>
		<div class="wrap_footer_top">
			<div class="wrap_footer_info">
				<div class="wrap_logo">
					<nuxt-icon name="Logo" filled></nuxt-icon>
					<p>Yana Babura</p>
				</div>
				<p class="footer_text">
					Уже после первой нашей встречи вы почувствуете себя спокойнее и
					увереннее!
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
			<ul class="qiuck_links_list">
				<h2>Быстрая навигация</h2>
				<li>Шапка</li>
				<li>Обо мне</li>
				<li>Услуги и цены</li>
				<li>Форма для записи</li>
				<li>Образование</li>
			</ul>
			<div class="wrap_form_questions">
				<h2>Остались вопросы?</h2>
				<p>Напишите свой email для обратной связи</p>
				<input
					type="email"
					class="wrap_form_questions__input"
					placeholder="Email adress"
				/>
				<button class="wrap_form_questions__button">Написать</button>
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
.wrap_form_questions {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2.5rem;
	margin-left: auto;
	h2 {
		color: #fefefe;
		font-family: Jost;
		font-size: 2.2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.64rem; /* 120% */
	}
	p {
		color: #fefefe;
		font-family: Jost;
		font-size: 1.7rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.8rem; /* 164.706% */
	}
	.wrap_form_questions__button {
		padding: 1.6rem 6.4rem 1.6rem 6.4rem;
		width: 100%;
		border-radius: 1rem;
		background: #b87869;
		color: #fefefe;
		text-align: center;
		font-family: Jost;
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.7rem; /* 112.5% */
	}
	.wrap_form_questions__input {
		padding: 2rem 1.6rem 2rem 1.6rem;
		width: 100%;
		border-radius: 0.3rem;
		border: 1px solid rgba(255, 255, 255, 0.32);
		background-color: transparent;
		color: #fefefe;
		font-family: Podkova;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		&::placeholder {
			color: #fefefe;
			font-family: Podkova;
			font-size: 1.6rem;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
		}
	}
}
.wrap_footer_top {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.wrap_footer_info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-right: 10rem;
}
.qiuck_links_list {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 1.4rem;
	h2 {
		color: #fefefe;
		font-family: Jost;
		font-size: 2.2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.64rem; /* 120% */
		margin-bottom: 2rem;
	}
	li {
		color: rgba(254, 254, 254, 0.8);
		font-family: Jost;
		font-size: 1.7rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.7rem; /* 158.824% */
	}
}
.wrap_logo {
	gap: 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 6rem;
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
	margin-bottom: 4rem;
	opacity: 0.8;
	max-width: 26rem;
	padding-left: 2rem;
}
.wrap_call_button {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1.6rem;
	padding-left: 2rem;
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
