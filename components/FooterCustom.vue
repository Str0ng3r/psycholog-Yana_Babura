<script lang="ts" setup>
const emailSend = ref(false);
const emailHelp = ref('');
const submitMail = async () => {
	const formData = new FormData();
	formData.append('email', emailHelp.value);

	try {
		const response = await fetch('https://formspree.io/f/xjkyepej', {
			method: 'POST',
			body: formData,
			headers: { Accept: 'application/json' },
		});

		if (response.ok) {
			emailSend.value = true;
			emailHelp.value = '';
		} else {
			alert('Ошибка отправки. Попробуйте снова.');
		}
	} catch (error) {
		console.error('Ошибка:', error);
		alert('Ошибка сети. Проверьте подключение к интернету.');
	}
};
</script>

<template>
	<footer>
		<div class="wrap_footer_top">
			<div class="wrap_footer_info">
				<div class="wrap_logo">
					<nuxt-icon name="Logo" filled class="icon_logotip"></nuxt-icon>
					<p>Yana Babura</p>
				</div>
				<p class="footer_text">
					Уже после первой нашей встречи вы почувствуете себя спокойнее и
					увереннее!
				</p>
				<div class="wrap_call_button">
					<a class="wrap_call_button__button" href="tel:+48452007989">
						<nuxt-icon name="phone_call" filled></nuxt-icon>
					</a>
					<p class="wrap_call_button__number">
						<span>Бесплатный вызов</span>+48452007989
					</p>
				</div>
			</div>
			<ul class="qiuck_links_list">
				<h2>Быстрая навигация</h2>
				<li><a href="#header">Шапка</a></li>
				<li><a href="#about">Обо мне</a></li>
				<li><a href="#services">Услуги и цены</a></li>
				<li><a href="#form_sender">Форма для записи</a></li>
				<li><a href="#studies">Образование</a></li>
				<div class="wrap_socials_links">
					<a href="https://www.facebook.com/profile.php?id=61574399262623">
						<nuxt-icon name="facebook" filled class="facebook_icon"></nuxt-icon
					></a>
					<a
						href="https://www.instagram.com/yana.babura.psycholog?igsh=MXI1eThzOHF1dHUyOQ=="
						><nuxt-icon
							name="instagram"
							filled
							class="instagram_icon"
						></nuxt-icon
					></a>
				</div>
			</ul>
			<form
				class="wrap_form_questions"
				v-if="!emailSend"
				@submit.prevent="submitMail"
			>
				<h2>Остались вопросы?</h2>
				<p>Напишите свой email для обратной связи</p>
				<input
					type="email"
					class="wrap_form_questions__input"
					placeholder="Email adress"
					v-model="emailHelp"
				/>
				<button class="wrap_form_questions__button" type="submit">
					Написать
				</button>
			</form>
			<h2 class="notify_message" v-if="emailSend">
				Спасибо за доверие <br />
				ближайшее время свяжусь с вами
			</h2>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.facebook_icon {
	cursor: pointer;
	opacity: 0.7;
	&:hover :deep(svg > path) {
		fill: #b87869;
	}
}
.instagram_icon {
	cursor: pointer;
	opacity: 0.7;
	&:hover :deep(svg > path) {
		stroke: #b87869;
	}
}
.notify_message {
	color: #ffffff;
	font-family: Podkova;
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2rem; /* 122.222% */
	text-align: center;
	margin-left: auto;
	@include lap {
		font-size: 1.6rem;
	}
}
.wrap_socials_links {
	width: 100%;
	display: flex;
	gap: 2rem;
	@include mob {
		align-items: center;
		justify-content: center;
	}
}
footer {
	background: url('../assets/img/back_footer.png') no-repeat center;
	width: 100%;
	padding: 6rem 15rem 2rem 15rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@include lap {
		padding: 4rem 6rem;
		background-size: cover;
	}
	@include mob {
		padding: 2rem 4rem;
		align-items: center;
	}
}
.wrap_form_questions {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2.5rem;
	margin-left: auto;
	@include lap {
		gap: 2rem;
	}
	@include m {
		margin-left: 1rem;
		margin-top: 2rem;
	}
	@include mob {
		margin-left: 0;
		align-items: center;
		justify-content: center;
	}
	h2 {
		color: #fefefe;
		font-family: Jost;
		font-size: 2.2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.64rem; /* 120% */
		@include lap {
			font-size: 2rem;
		}
	}
	p {
		color: #fefefe;
		font-family: Jost;
		font-size: 1.7rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.8rem; /* 164.706% */
		@include lap {
			font-size: 1.4rem;
			line-height: 1.8rem; /* 164.706% */
		}
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
		@include lap {
			font-size: 2rem;
			line-height: 2.2rem; /* 164.706% */
		}
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
		@include lap {
			padding: 1.8rem 1.4rem 1.8rem 1.4rem;
		}
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
	@include m {
		flex-wrap: wrap;
		gap: 1rem;
	}
	@include mob {
		justify-content: center;
	}
}
.wrap_footer_info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-right: 10rem;
	@include lap {
		margin-right: 6rem;
	}
	@include m {
		margin-right: 3rem;
	}
	@include mob {
		margin-right: 0;
		align-items: center;
	}
}
.qiuck_links_list {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 1.4rem;
	padding-top: 4rem;
	@include m {
		gap: 0.8rem;
	}
	@include mob {
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 2rem !important;
	}
	h2 {
		color: #fefefe;
		font-family: Jost;
		font-size: 2.2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.64rem; /* 120% */
		margin-bottom: 2rem;
		@include lap {
			font-size: 2rem;
			line-height: 2.2rem; /* 164.706% */
			margin-bottom: 1.6rem;
		}
		@include mob {
			margin-bottom: 1rem;
		}
	}
	li {
		color: rgba(254, 254, 254, 0.8);
		font-family: Jost;
		font-size: 1.7rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.7rem; /* 158.824% */
		a {
			all: unset;
			cursor: pointer;
		}
	}
}
.wrap_logo {
	gap: 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 6rem;
	@include m {
		margin-bottom: 1rem;
	}
	.icon_logotip:deep(svg) {
		@include mob {
			width: 8rem;
			height: 8rem;
		}
	}
	p {
		color: #ffffff;
		font-family: Podkova;
		font-size: 4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 9.5rem; /* 237.5% */
		@include m {
			line-height: 4rem;
		}
		@include mob {
			font-size: 3rem;
			line-height: 3rem;
		}
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
	@include mob {
		padding-left: 0;
		margin-bottom: 2rem;
		text-align: center;
	}
}
.wrap_call_button {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1.6rem;
	padding-left: 2rem;
	@include mob {
		padding-left: 0;
		margin-bottom: 2rem;
	}
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
