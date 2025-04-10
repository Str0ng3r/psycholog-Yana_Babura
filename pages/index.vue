<script lang="ts" setup>
import axios from 'axios';
useSeoMeta({
	title: 'Онлайн психолог Yana Babura | Консультации в Познани',
	description:
		'Онлайн-помощь психолога Yana Babura. Поддержка в кризисах, тревожности и выгорании. Игропрактика, консультации в Познани и онлайн.',
	ogTitle: 'Психолог Yana Babura — Онлайн-консультации и приём в Познани',
	ogDescription:
		'Консультации с дипломированным психологом и игропрактиком. Онлайн и офлайн приём. Работа с тревогами, стрессами, самооценкой.',
	ogImage: '/ogImage.webp',
	twitterCard: 'summary_large_image',
	twitterTitle: 'Психолог Yana Babura — Онлайн и в Познани',
	twitterDescription:
		'Онлайн и офлайн консультации с психологом и игропрактиком. Поддержка при тревогах, стрессах и кризисах.',
	twitterImage: '/ogImage.webp',
});
const Slider = defineAsyncComponent(() => import('~/components/Slider.vue'));
const CardServise = defineAsyncComponent(
	() => import('~/components/CardServise.vue')
);
const SliderCards = defineAsyncComponent(
	() => import('~/components/SliderCards.vue')
);
const formSend = ref(false);
const nameForm = ref('');
const emailForm = ref('');
const numberForm = ref('');
const messageForm = ref('');
const acceptService = ref('Обычная сессия');

const submitForm = async () => {
	const formData = new FormData();
	formData.append('name', nameForm.value);
	formData.append('email', emailForm.value);
	formData.append('phone', numberForm.value);
	formData.append('message', messageForm.value);
	formData.append('service', acceptService.value);
	await axios.post(
		'https://67f3c545cbef97f40d2c03d8.mockapi.io/yana-babura/site/clients',
		{ name: nameForm.value, email: emailForm.value, number: numberForm.value }
	);

	try {
		const response = await fetch('https://formspree.io/f/xjkyepej', {
			method: 'POST',
			body: formData,
			headers: { Accept: 'application/json' },
		});

		if (response.ok) {
			formSend.value = true;
			nameForm.value = '';
			emailForm.value = '';
			numberForm.value = '';
			messageForm.value = '';
		} else {
			alert('Ошибка отправки. Попробуйте снова.');
		}
	} catch (error) {
		console.error('Ошибка:', error);
		alert('Ошибка сети. Проверьте подключение к интернету.');
	}
};

const reviewsArray = [
	{
		title: 'Евгения, 27 лет | Киев',
		desc: '«Хочу сказать вам огромное спасибо! Я долго не решалась обратиться за помощью, всё время думала, что моя тревога – это ерунда, с которой надо справляться самой. Но чем больше я пыталась игнорировать свои чувства, тем хуже становилось. С первой встречи с вами мне стало легче. Вы не осуждали, не говорили «возьми себя в руки», а просто слушали и помогали разобраться. Теперь я понимаю, откуда берётся моя тревога и что с ней делать. Спасибо вам за поддержку и добрые слова – они очень помогли!»',
		stars: 5,
	},
	{
		title: 'Елена, 25 лет | Познань',
		desc: '«Спасибо вам за вашу помощь! После тяжёлого разрыва мне казалось, что я никому не нужна, что во всём виновата только я. Было страшно остаться одной, казалось, что со мной что-то не так. Благодаря нашим встречам я начала понимать, как много лет жила для других, забывая о себе. Я научилась слушать себя, уважать свои желания и не бояться быть собой. Теперь я чувствую, что могу двигаться дальше. Спасибо вам за поддержку, тёплые слова и за то, что помогли мне увидеть себя по-другому!»',
		stars: 5,
	},
	{
		title: 'Александр, 27 лет | Вроцлав',
		desc: '«Хочу сказать вам спасибо! Я долго не замечал, как загоняю себя – работа, обязанности, ответственность, а на себя времени не оставалось совсем. Постоянная усталость, раздражение, полное отсутствие сил… Думал, что просто нужно потерпеть, но становилось только хуже. Благодаря вам я понял, что отдых – это не слабость, а необходимость. Научился замечать, когда загоняю себя, и вовремя останавливаться. Жить стало легче, появилось больше сил и спокойствия. Спасибо вам за вашу поддержку и за то, что помогли мне снова почувствовать вкус жизни!»',
		stars: 4,
	},
	{
		title: 'Инна, 32 года | Одесса',
		desc: '“Спасибо вам, Яна, за поддержку, за пространство, в котором я смогла быть собой. Когда я пришла к вам, мне казалось, что я застряла — не понимала, чего хочу, постоянно сомневалась в себе, а тревога не отпускала ни на минуту. Вы помогли мне увидеть, в чём настоящая причина моего состояния, и постепенно, шаг за шагом, я начала возвращаться к себе. Теперь я чувствую себя увереннее, научилась слышать свои желания и больше не боюсь делать выбор. Это бесценно, и я искренне благодарна!”',
		stars: 5,
	},
	{
		title: ' Наталия, 41 год | Познань',
		desc: 'Яночка, хочу сказать вам огромное спасибо! Благодаря нашей работе я по-другому посмотрела на свои отношения — и с мужем, и с детьми, и с самой собой. Вы помогли мне понять, почему я снова и снова наступаю на одни и те же грабли, и как я могу это изменить. А ещё мне особенно откликнулась трансформационная игра — это было глубокое и очень важное переживание. Теперь я чувствую себя намного свободнее, спокойнее и увереннее. Благодарю вас за ваше тепло, чуткость и умение видеть главное!”!',
		stars: 4,
	},
];
const reqCards = [
	{
		title: 'Отношения: партнерские, родительские, детско-родительские',
		desc: [
			'Разрешение конфликтов и восстановление доверия',
			'Выход из абьюзивных отношений',
			'Построение доверительных отношений с ребенком',
		],
		icon: 'first_req',
	},
	{
		title: 'Самооценка, самоценность и личностные границы',
		desc: [
			'Формирование устойчивой самооценки и чувства собственной ценности',
			'Осознание и выстраивание личных границ в отношениях',
			'Развитие внутренней опоры и доверия к себе',
		],
		icon: 'second_req',
	},
	{
		title: 'Самореализация и финансовое мышление',
		desc: [
			'Профессиональное выгорание, баланс в личной жизни и работе',
			'Развитие уверенности в своих компетенциях, работа с мотивацией',
			'Работа с финансовыми убеждениями и страхами',
		],
		icon: 'three_req',
	},
	{
		title: 'Эмоциональное состояние и адаптация к жизненным переменам',
		desc: [
			'Работа с тревожностью, стрессом, эмоциональной нестабильностью',
			'Переживание кризисных состояний, потерь',
			'Поддержка в процессе миграции и адаптации к новым условиям жизни',
		],
		icon: 'four_req',
	},
];
const methods = [
	'Индивидуальные консультации онлайн и очно в уютном кабинете в центре Познани',
	'Финансовые игры CashFlow для взрослых и детей очно в Познани',
	'Трансформационная игра для женщин “Важное о себе” Онлайн и очно в центре Познани',
	'Трансформационная игра “Лила” очно в Познани,в приятной и спокойной атмосфере',
];
const serviceCards = [
	{
		title: 'Первичная диагностическая сессия 20 минут',
		desc: ['БЕСПЛАТНО'],
		icon: 'first_services',
		value: 'Первичная диагностическая сессия 20 минут',
	},
	{
		title: 'Индивидуальная сессия очно или онлайн 60 минут',
		desc: ['180 zł'],
		icon: 'second_services',
		value: 'Индивидуальная сессия очно или онлайн 60 минут',
	},
	{
		title: 'Пакет из 5 сессий со скидкой - 5% (5 сессий по 60мин)',
		desc: ['850 zł'],
		icon: 'three_services',
		value: 'Пакет из 5 сессий',
	},
];
</script>

<template>
	<section class="main_sect">
		<div class="wrap_title">
			<p data-aos="fade-up">Познань | Онлайн</p>
			<h1 data-aos="fade-up">
				Психолог <br />
				Яна Бабура
			</h1>
			<h3 data-aos="fade-up">
				Путь к себе начинается с одного шага - <br />
				давайте сделаем его вместе.
			</h3>
		</div>
		<NuxtImg
			src="/img/mainphoto.webp"
			alt="People psycholog Yana Babura"
			class="photo_main_psycholog"
			data-aos="fade-up"
			loading="eager"
			width="620"
			format="webp"
			quality="100"
		/>
	</section>
	<section class="about_section">
		<NuxtImg
			src="/img/about_img.webp"
			alt="Photo sycholog Yana Babura"
			class="img_about"
			loading="lazy"
			width="800"
			format="webp"
			quality="100"
		/>
		<div class="wrap_about_info" id="about">
			<h2>Меня зовут Яна, я дипломированный психолог и игропрактик.</h2>
			<h3>
				Я создаю пространство, в котором можно быть собой - без страха
				осуждения, без необходимости “соответствовать”, без чувства одиночества
				перед своими переживаниями.
			</h3>
			<a href="#form_sender">ЗАПИСАТЬСЯ</a>
		</div>
	</section>
	<section class="request_list">
		<p>С чем я работаю</p>
		<h2>В каких запросах могу помочь :</h2>
		<div class="wrap_cards">
			<CardServise
				v-for="card in reqCards"
				:icon="card.icon"
				:title="card.title"
				:desc="card.desc"
			></CardServise>
		</div>
		<a href="#form_sender" class="button_requset">ЗАПИСАТЬСЯ</a>
	</section>
	<section class="how_work_section">
		<NuxtImg
			src="/img/img_how_work.webp"
			alt="Psycholog people Yana Babura behind table"
			class="how_work__left_img"
			loading="lazy"
			width="747"
			quality="100"
		/>
		<div class="how_work__wrap_info">
			<h2>Как я работаю:</h2>
			<p>
				В своей практике я использую классические психологические подходы, а так
				же трансформационные игры и метафорические карты.
			</p>
			<div class="wrapper_for_works_methods">
				<p v-for="text in methods">
					<nuxt-icon name="ready" filled></nuxt-icon>
					{{ text }}
				</p>
			</div>
			<p class="how_work__undertext">
				Эти методики помогут мягко, но глубоко увидеть скрытые сценарии изменить
				ограничивающие установки и найти ответы внутри себя.
			</p>
			<a class="how_work__button" href="#form_sender">ЗАПИСАТЬСЯ</a>
		</div>
	</section>
	<section class="section_reviews">
		<div class="section_reviews__wrap_text">
			<h2>Что говорят мои клиенты:</h2>
			<div class="wrap_for_slider">
				<SliderCards :reviews="reviewsArray"> </SliderCards>
			</div>
		</div>
		<NuxtImg
			src="/img/reviews_img.webp"
			alt="Psycholog speak with people"
			class="section_reviews__right_img"
			loading="lazy"
			width="815"
			quality="100"
		/>
	</section>
	<section class="section_stats">
		<NuxtImg
			src="/img/stats_img.webp"
			alt="Psycholog Yana Babura see in window"
			loading="lazy"
			width="260"
			quality="100"
		/>
		<p>8+ <span>Лет в психологии</span></p>
		<p>2000+ <span>Часов практики</span></p>
		<p>100% <span>Довольных клиентов</span></p>
	</section>
	<section class="section_services" id="services">
		<h2>Выберите услугу</h2>
		<div class="wrapper_services">
			<CardServise
				class="card_serv"
				v-for="card of serviceCards"
				:icon="card.icon"
				:title="card.title"
				:desc="card.desc"
				:button="true"
				:value="card.value"
				v-model="acceptService"
			></CardServise>
		</div>
	</section>
	<section class="study_section" id="studies">
		<h2>Образование</h2>
		<div class="wrap_for_slider"><Slider> </Slider></div>
	</section>
	<section class="section_form" id="form_sender">
		<NuxtImg
			src="/img/form_img.webp"
			alt="Sycholog Yana Babura see in camera"
			loading="lazy"
			quality="100"
		/>
		<form class="form_reg" v-if="!formSend" @submit.prevent="submitForm">
			<h2 class="form_reg__title">
				Давайте обсудим ваш запрос по телефону или напишите мне, и я расскажу,
				как могу помочь.
			</h2>
			<label>
				<input
					type="text"
					name="name"
					required
					placeholder="Ваше имя:"
					v-model="nameForm"
				/>
			</label>
			<label>
				<input
					type="email"
					name="email"
					required
					placeholder="Ваш email"
					v-model="emailForm"
				/>
			</label>
			<label>
				<input
					type="tel"
					name="phone"
					pattern="\+?[0-9\s\-\(\)]{7,}"
					placeholder="Номер телефона"
					required
					v-model="numberForm"
				/>
			</label>
			<label class="service_label">
				<input
					type="text"
					name="service"
					required
					placeholder="Какой пакет сессий вас интересует?"
					v-model="acceptService"
				/>
			</label>
			<label>
				<textarea
					name="message"
					placeholder="Здесь можете указать удобное время"
					rows="1"
					v-model="messageForm"
				></textarea>
			</label>
			<button type="submit">ЗАПИСАТЬСЯ</button>
		</form>
		<h2 v-if="formSend" class="notify_message">
			Спасибо за вашу заявку,ближайшее время с вами свяжуться
		</h2>
	</section>
</template>

<style scoped lang="scss">
.notify_message {
	color: #5d3127;
	font-family: Podkova;
	font-size: 4.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: 5.5rem; /* 122.222% */
	text-align: center;
}
.service_label {
	display: none !important;
}
.form_reg {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	gap: 3rem;
	@include lap {
		align-items: center;
	}
	@include mob {
		gap: 2rem;
	}
	button {
		color: #fff;
		text-align: center;
		font-family: Jost;
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2.7rem; /* 192.857% */
		letter-spacing: 0.1rem;
		border-radius: 1rem;
		background: #b87869;
		padding: 1.4rem 8rem;
	}
	label {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		border-bottom: 1px solid rgba(91, 49, 40, 0.1);
		input {
			width: 100%;
			padding: 0.3rem;
			background-color: transparent;
			border: none;
			color: #9b6559;
			font-family: Jost;
			font-size: 1.6rem;
			font-weight: 400;
			&::placeholder {
				color: #b87869;
				opacity: 0.8;
				font-family: Jost;
				font-size: 1.6rem;
				font-weight: 400;
			}
		}
		textarea {
			width: 100%;
			padding: 0.3rem;
			background-color: transparent;
			border: none;
			resize: none;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			color: #555;
			font-family: Jost;
			font-size: 1.6rem;
			font-weight: 400;
			&::placeholder {
				color: #555;
				font-family: Jost;
				font-size: 1.6rem;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			}
		}
	}
	.form_reg__title {
		color: #5d3127;
		font-family: Podkova;
		font-size: 4.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 5.5rem; /* 122.222% */
		margin-bottom: 10rem;
		max-width: 70rem;
		@include lap {
			margin-bottom: 6rem;
			text-align: center;
		}
		@include mob {
			font-size: 3rem;
			line-height: 3.4rem;
			margin-bottom: 4rem;
		}
	}
}
.section_form {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #f9f6f3;
	padding: 9rem 14rem;
	gap: 4rem;
	width: 100%;
	@include lap {
		flex-direction: column;
		padding: 6rem 10rem;
	}
	@include mob {
		padding: 3rem 2rem;
	}
	img {
		max-width: 63rem;
		@include lap {
			max-width: 46rem;
		}
		@include mob {
			max-height: 40rem;
		}
	}
}
.study_section {
	background: #f9f6f3;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4rem 0 10rem 0;
	flex-direction: column;
	@include lap {
		padding: 2rem 0 4rem 0;
	}
	@include mob {
		padding-top: 0;
		padding-bottom: 2rem;
	}
	h2 {
		color: #b97363;
		font-family: Jost;
		font-size: 4.8rem;
		font-style: normal;
		font-weight: 500;
		letter-spacing: 0.1rem;
		margin-bottom: 3rem;
		@include mob {
			font-size: 3.6rem;
			margin-bottom: 2rem;
		}
	}
}
.card_serv {
	max-width: 30.6rem;
	justify-content: space-between;
	:deep(h2) {
		font-size: 2rem;
	}
	:deep(li) {
		color: #666;
		text-align: center;
		font-family: Jost;
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.8rem; /* 75% */
		list-style-type: none;
	}
	:deep(button) {
		padding: 1.2rem 4rem;
	}
}
.section_services {
	padding: 15rem 0 20rem 0;
	width: 100%;
	display: flex;
	background-color: #f9f6f3;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@include lap {
		padding: 10rem 0 12rem 0;
	}
	@include mob {
		padding: 4rem 0 6rem 0;
	}
	h2 {
		color: #5d3127;
		text-align: center;
		font-family: Podkova;
		font-size: 4.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 5.5rem; /* 122.222% */
		margin-bottom: 8rem;
		@include lap {
			margin-bottom: 6rem;
			font-size: 4rem;
		}
		@include mob {
			margin-bottom: 2rem;
			font-size: 3rem;
		}
	}
	.wrapper_services {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.4rem;
		@include m {
			flex-wrap: wrap;
			max-width: 31rem;
		}
	}
}
.section_stats {
	background: #5b3128;
	width: 100%;
	padding: 3.5rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	@include mob {
		padding: 1.4rem;
	}
	img {
		border-radius: 50%;
		width: 26rem;
		height: 26rem;
		object-fit: cover;
		@include lap {
			width: 18rem;
			height: 18rem;
		}
		@include mob {
			display: none;
		}
	}
	p {
		color: #fff;
		font-family: Jost;
		font-size: 8rem;
		font-style: normal;
		text-align: center;
		font-weight: 700;
		line-height: 4.4rem; /* 45.833% */
		display: flex;
		flex-direction: column;
		gap: 2.6rem;
		@include lap {
			font-size: 6rem;
			line-height: 6rem;
			gap: 2.4rem;
		}
		@media only screen and (max-width: 1200px) {
			font-size: 5rem;
			line-height: 5rem;
			gap: 2.2rem;
		}
		@include mob {
			gap: 1rem;
			font-size: 2.6rem;
			line-height: 3rem;
		}
		span {
			color: #fff;
			text-align: center;
			font-family: Podkova;
			font-size: 3rem;
			font-style: normal;
			font-weight: 600;
			line-height: 2.8rem; /* 70% */
			@include lap {
				font-size: 2.6rem;
				line-height: 2.8rem;
			}
			@media only screen and (max-width: 1200px) {
				font-size: 2rem;
				line-height: 2.2rem;
			}
			@include mob {
				font-size: 1.8rem;
				line-height: 2rem;
			}
		}
	}
}
.section_reviews {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@include lap {
		flex-direction: column;
		padding-bottom: 6rem;
	}
	@include m {
		padding-bottom: 10rem;
	}
	@include mob {
		padding-bottom: 0rem;
	}
}
.section_reviews__right_img {
	object-fit: cover;
	width: 81.5rem;
	max-height: 80rem;
	@include lap {
		max-height: 60rem;
		object-position: center;
	}
	@include mob {
		display: none;
	}
}
.wrap_for_slider {
	width: 70rem;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	@include mob {
		width: 32rem;
	}
}
.section_reviews__wrap_text {
	padding: 10rem 6rem;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@include lap {
		padding: 6rem 4rem 4rem 4rem;
	}
	@include mob {
		padding: 3rem;
	}
	h2 {
		color: #5d3127;
		text-align: center;
		font-family: Podkova;
		font-size: 4.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 5.5rem; /* 122.222% */
		margin-bottom: 5.8rem;
		@include mob {
			font-size: 3rem;
			line-height: 3.4rem;
			margin-bottom: 1rem;
		}
	}
}
.how_work_section {
	width: 100%;
	background: #5b3128;
	display: flex;
	height: 75rem;
	align-items: flex-start;
	justify-content: space-between;
	@include lap {
		height: 54rem;
	}
	@include m {
		height: 64rem;
	}
	@include mob {
		flex-direction: column;
		height: auto;
	}
	.how_work__wrap_info {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		padding: 4rem 3rem;
		@include lap {
			padding: 3rem 2rem;
		}
		@include mob {
			padding: 2rem 1.4rem;
		}
		.how_work__undertext {
			color: #fff;
			text-align: center;
			font-family: Podkova;
			font-size: 2rem;
			font-style: normal;
			font-weight: 600;
			line-height: 2.8rem; /* 140% */
			margin-bottom: 2.5rem;
			@include lap {
				display: none;
				font-size: 1.8rem;
				line-height: 2.2rem;
				margin-bottom: 2rem;
			}
			@include mob {
				font-size: 1.2rem;
				line-height: 1.4rem;
				margin-bottom: 1rem;
			}
		}
		.how_work__button {
			padding: 1.5rem 11rem;
			border-radius: 1rem;
			background: #b97363;
			color: #fff;
			font-family: Jost;
			font-size: 2rem;
			font-style: normal;
			font-weight: 500;
			line-height: 2.7rem; /* 135% */
			margin: 0 auto;
			@include lap {
				padding: 1.5rem 8rem;
			}
			@include mob {
				padding: 1.4rem 2.6rem;
				font-size: 1.6rem;
				line-height: 2rem;
			}
		}
		h2 {
			color: #fff;
			font-family: Jost;
			font-size: 4rem;
			font-style: normal;
			font-weight: 500;
			line-height: 2.7rem; /* 67.5% */
			letter-spacing: 0.1rem;
			margin-bottom: 1.6rem;
			@include lap {
				font-size: 3rem;
				line-height: 3rem;
				margin-bottom: 1.2rem;
			}
			@include mob {
				font-size: 2rem;
				line-height: 2rem;
				margin-bottom: 0.8rem;
			}
		}
		p {
			color: #fff;
			font-family: Podkova;
			font-size: 2.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 4rem; /* 133.333% */
			margin-bottom: 2rem;
			@include lap {
				font-size: 2rem;
				line-height: 2.8rem;
				margin-bottom: 3rem;
			}
			@include mob {
				font-size: 1.2rem;
				line-height: 1.4rem;
				margin-bottom: 1.6rem;
				white-space: wrap;
			}
		}
		.wrapper_for_works_methods {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* Две колонки */
			margin: 0 auto;
			flex-wrap: wrap;
			align-items: flex-start;
			justify-content: center;
			margin-bottom: 4.4rem;
			gap: 3rem;
			@include lap {
				gap: 2rem;
				margin-bottom: 3rem;
			}
			@include mob {
				gap: 1.4rem;
				margin-bottom: 2rem;
			}
			p {
				gap: 2rem;
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				max-width: 30rem;
				color: #fff;
				font-family: Podkova;
				font-size: 1.8rem;
				font-style: normal;
				font-weight: 600;
				line-height: 2.8rem; /* 155.556% */
				@include lap {
					gap: 1.6rem;
					line-height: 2rem;
					font-size: 1.6rem;
					max-width: 24rem;
				}
				@include mob {
					gap: 1rem;
					line-height: 1.6rem;
					font-size: 1.2rem;
					max-width: 24rem;
				}
				:deep(svg) {
					@include mob {
						width: 1.4rem;
					}
				}
			}
		}
	}
	.how_work__left_img {
		width: 45%;
		height: 100%;
		object-fit: cover;
		@include lap {
			width: 40%;
			object-position: center;
		}
		@include mob {
			width: 100%;
		}
	}
}
.request_list {
	padding: 12rem 30rem;
	width: 100%;
	background-color: #f9f6f3;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	@include lap {
		padding: 6rem 18rem;
	}
	@include mob {
		padding: 4rem 4rem;
	}
	.button_requset {
		padding: 1.4rem 4.4rem 1.4rem 4.4rem;
		border-radius: 1rem;
		background: #b87869;
		color: #fff;
		text-align: center;
		font-family: Jost;
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 3rem; /* 214.286% */
		margin-top: 7.8rem;
		@include lap {
			margin-top: 5rem;
		}
		@include mob {
			margin-top: 2.8rem;
			padding: 1.4rem 2.6rem;
			font-size: 1.6rem;
			line-height: 2rem;
		}
	}
	p {
		color: #b97363;
		text-align: center;
		font-family: Jost;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2.7rem; /* 168.75% */
		letter-spacing: 0.1rem;
		margin-bottom: 1.5rem;
		@include mob {
			line-height: 2rem;
		}
	}
	h2 {
		color: #5d3127;
		text-align: center;
		font-family: Podkova;
		font-size: 4.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 5.5rem; /* 122.222% */
		margin-bottom: 7rem;
		@include mob {
			margin-bottom: 2rem;
			font-size: 3rem;
			line-height: 3.6rem;
		}
	}
	.wrap_cards {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.4rem;
		@include lap {
			flex-wrap: wrap;
		}
		@include mob {
			gap: 1.8rem;
		}
	}
}
.main_sect {
	width: 100%;
	padding: 16rem 21rem 33rem 21rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: url('../assets/img/background_main.webp') center no-repeat;
	position: relative;
	@include lap {
		padding: 16rem 14rem 26rem 14rem;
	}
	@media only screen and (max-width: 1200px) {
		padding: 16rem 8rem 22rem 8rem;
	}
	@include m {
		padding: 10rem 8rem 10rem 8rem;
	}
	@include mob {
		padding: 3rem 3rem 3rem 3rem;
	}
}
.wrap_about_info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 4rem;
	@include lap {
		gap: 2.4rem;
	}
	@include m {
		align-items: center;
		justify-content: center;
	}
	h2 {
		color: #5d3127;
		font-family: Podkova;
		font-size: 4.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 5.5rem; /* 122.222% */
		@include lap {
			font-size: 3.2rem;
			line-height: 3.4rem;
		}
		@media only screen and (max-width: 1200px) {
			font-size: 2.8rem;
			line-height: 3rem;
		}
		@include m {
			text-align: center;
		}
		@include mob {
			font-size: 2rem;
			line-height: 2.4rem;
		}
	}
	h3 {
		color: #000;
		font-family: Jost;
		font-size: 3.2rem;
		font-style: normal;
		font-weight: 400;
		line-height: 4.5rem; /* 140.625% */
		@include lap {
			font-size: 2.8rem;
			line-height: 3.4rem;
		}
		@media only screen and (max-width: 1200px) {
			font-size: 2.4rem;
			line-height: 2.8rem;
		}
		@include m {
			text-align: center;
		}
		@include mob {
			font-size: 1.6rem;
			line-height: 2rem;
		}
	}
	a {
		color: #fff;
		font-family: Jost;
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2.7rem; /* 192.857% */
		padding: 1.8rem 5.6rem;
		background-color: #b97363;
		border-radius: 1rem;
		@include lap {
			padding: 1.4rem 3.2rem;
		}
		@include mob {
			padding: 1.4rem 2.6rem;
			font-size: 1.6rem;
			line-height: 2rem;
		}
	}
}
.photo_main_psycholog {
	position: absolute;
	bottom: 0;
	right: 12rem;
	max-width: 62rem;
	@include lap {
		max-width: 58rem;
		right: 10rem;
	}
	@media only screen and (max-width: 1200px) {
		max-width: 50rem;
		right: 4rem;
	}
	@include m {
		max-width: 30rem;
		right: 2rem;
	}
	@include mob {
		max-width: 20rem;
		right: 0.2rem;
	}
}
.img_about {
	max-width: 80rem;
	@include lap {
		max-width: 48rem;
	}
	@include mob {
		display: none;
	}
}
.about_section {
	padding: 9rem 9.6rem 11rem 9.6rem;
	display: flex;
	width: 100%;
	gap: 6rem;
	align-items: center;
	justify-content: space-between;
	@include lap {
		padding: 7rem 6rem 8rem 6rem;
	}
	@include m {
		flex-direction: column;
		padding: 7rem 9.6rem 7rem 9.6rem;
	}
	@include mob {
		padding: 4rem 4rem 4rem 4rem;
	}
}
.wrap_title {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.6rem;
	@include mob {
		gap: 0.8rem;
	}
	p {
		color: #ffe6e0;
		font-family: Jost;
		font-size: 2rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.92rem; /* 96% */
		letter-spacing: 0.1rem;
		@include m {
			font-size: 1.6rem;
			line-height: 2rem;
		}
		@include mob {
			font-size: 1.4rem;
			line-height: 1.6rem;
		}
	}
	h1 {
		color: #fff;
		font-family: Podkova;
		font-size: 8rem;
		font-style: normal;
		font-weight: 600;
		line-height: 9.5rem; /* 118.75% */
		@include lap {
			font-size: 7rem;
			line-height: 8rem;
		}
		@include m {
			font-size: 5rem;
			line-height: 6rem;
		}
		@include mob {
			font-size: 3rem;
			line-height: 4rem;
		}
	}
	h3 {
		color: #fff;
		font-family: Jost;
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 3.2rem; /* 133.333% */
		@include lap {
			font-size: 2.2rem;
		}
		@include m {
			font-size: 2rem;
			line-height: 2.4rem;
		}
		@include mob {
			font-size: 1.6rem;
			line-height: 2rem;
			max-width: 18rem;
		}
	}
}
</style>
