<script lang="ts" setup>
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
	'Трансформационная игра “Лила” очно в Познани.В приятной и спокойной атмосфере',
];
const serviceCards = [
	{
		title: 'Первичная диагностическая сессия 20 минут',
		desc: ['БЕСПЛАТНО'],
		icon: 'first_services',
	},
	{
		title: 'Индивидуальная сессия очно или онлайн 60 минут',
		desc: ['180 zł'],
		icon: 'second_services',
	},
	{
		title: 'Пакет из 5 сессий со скидкой - 5% (5 сессий по 60мин)',
		desc: ['850 zł'],
		icon: 'three_services',
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
		<img
			src="../assets/img/mainphoto.png"
			alt="People psycholog Yana Babura"
			class="photo_main_psycholog"
			data-aos="fade-up"
		/>
	</section>
	<section class="about_section">
		<img
			src="../assets/img/about_img.png"
			alt="Photo sycholog Yana Babura"
			class="img_about"
		/>
		<div class="wrap_about_info">
			<h2>Меня зовут Яна, я дипломированный психолог и игропрактик.</h2>
			<h3>
				Я создаю пространство, в котором можна быть собой - без страха
				осуждения, без необходимости “соответствовать”, без чувства одиночества
				перед своими переживаниями.
			</h3>
			<button>ЗАПИСАТЬСЯ</button>
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
		<button class="button_requset">ЗАПИСАТЬСЯ</button>
	</section>
	<section class="how_work_section">
		<img
			src="../assets/img/img_how_work.png"
			alt="Psycholog people Yana Babura behind table"
			class="how_work__left_img"
		/>
		<div class="how_work__wrap_info">
			<h2>Как я работаю:</h2>
			<p>
				В своей практике я использую класические психологические подходы, а так
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
			<button class="how_work__button">ЗАПИСАТЬСЯ</button>
		</div>
	</section>
	<section class="section_reviews">
		<div class="section_reviews__wrap_text">
			<h2>Что говорят мои клиенты:</h2>
			<div class="wrap_for_slider">
				<SliderCards :reviews="reviewsArray"> </SliderCards>
			</div>
		</div>
		<img
			src="../assets/img/reviews_img.jpg"
			alt="Psycholog speak with people"
			class="section_reviews__right_img"
		/>
	</section>
	<section class="section_stats">
		<img
			src="../assets/img/stats_img.jpg"
			alt="Psycholog Yana Babura see in window"
		/>
		<p>8+ <span>Лет в психологии</span></p>
		<p>2000+ <span>Часов практики</span></p>
		<p>100% <span>Довольных клиентов</span></p>
	</section>
	<section class="section_services">
		<h2>Выберите услугу</h2>
		<div class="wrapper_services">
			<CardServise
				class="card_serv"
				v-for="card of serviceCards"
				:icon="card.icon"
				:title="card.title"
				:desc="card.desc"
				:button="true"
			></CardServise>
		</div>
	</section>
	<section class="study_section">
		<h2>Образование</h2>
		<div class="wrap_for_slider"><Slider> </Slider></div>
	</section>
</template>

<style scoped lang="scss">
.study_section {
	background: #f9f6f3;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4rem 0 10rem 0;
	flex-direction: column;
	h2 {
		color: #b97363;
		font-family: Jost;
		font-size: 4.8rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2.7rem; /* 56.25% */
		letter-spacing: 0.1rem;
		margin-bottom: 3rem;
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
	h2 {
		color: #5d3127;
		text-align: center;
		font-family: Podkova;
		font-size: 4.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 5.5rem; /* 122.222% */
		margin-bottom: 8rem;
	}
	.wrapper_services {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.4rem;
	}
}
.section_stats {
	background: #5b3128;
	width: 100%;
	padding: 3.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	img {
		border-radius: 50%;
		width: 26rem;
		height: 26rem;
		object-fit: cover;
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
		span {
			color: #fff;
			text-align: center;
			font-family: Podkova;
			font-size: 3rem;
			font-style: normal;
			font-weight: 600;
			line-height: 2.8rem; /* 70% */
		}
	}
}
.section_reviews {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.section_reviews__right_img {
	object-fit: cover;
	width: 81.5rem;
	max-height: 80rem;
}
.wrap_for_slider {
	width: 70rem;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
}
.section_reviews__wrap_text {
	padding: 10rem 6rem;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h2 {
		color: #5d3127;
		text-align: center;
		font-family: Podkova;
		font-size: 4.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 5.5rem; /* 122.222% */
		margin-bottom: 5.8rem;
	}
}
.how_work_section {
	width: 100%;
	background: #5b3128;
	display: flex;
	height: 75rem;
	align-items: flex-start;
	justify-content: space-between;
	.how_work__wrap_info {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		padding: 4rem 3rem;
		.how_work__undertext {
			color: #fff;
			text-align: center;
			font-family: Podkova;
			font-size: 2rem;
			font-style: normal;
			font-weight: 600;
			line-height: 2.8rem; /* 140% */
			margin-bottom: 2.5rem;
		}
		.how_work__button {
			padding: 1.5rem 11rem 1.5rem 11rem;
			border-radius: 1rem;
			background: #b97363;
			color: #fff;
			font-family: Jost;
			font-size: 2rem;
			font-style: normal;
			font-weight: 500;
			line-height: 2.7rem; /* 135% */
			margin: 0 auto;
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
		}
		p {
			color: #fff;
			font-family: Podkova;
			font-size: 2.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 4rem; /* 133.333% */
			margin-bottom: 2rem;
		}
		.wrapper_for_works_methods {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* Две колонки */
			gap: 20px;
			margin: 0 auto;
			flex-wrap: wrap;
			align-items: flex-start;
			justify-content: center;
			margin-bottom: 4.4rem;
			gap: 3rem;
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
			}
		}
	}
	.how_work__left_img {
		width: 45%;
		height: 100%;
		object-fit: cover;
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
	}
	.wrap_cards {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.4rem;
	}
}
.main_sect {
	width: 100%;
	padding: 16rem 21rem 33rem 21rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: url('../assets/img/background_main.png') center no-repeat;
	position: relative;
}
.wrap_about_info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 4rem;
	h2 {
		color: #5d3127;
		font-family: Podkova;
		font-size: 4.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 5.5rem; /* 122.222% */
	}
	h3 {
		color: #000;
		font-family: Jost;
		font-size: 3.2rem;
		font-style: normal;
		font-weight: 400;
		line-height: 4.5rem; /* 140.625% */
	}
	button {
		color: #fff;
		font-family: Jost;
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2.7rem; /* 192.857% */
		padding: 1.8rem 5.6rem 1.8rem 5.6rem;
		background-color: #b97363;
		border-radius: 1rem;
	}
}
.photo_main_psycholog {
	position: absolute;
	bottom: 0;
	right: 12rem;
	max-width: 62rem;
}
.img_about {
	max-width: 80rem;
}
.about_section {
	padding: 9rem 9.6rem 11rem 9.6rem;
	display: flex;
	width: 100%;
	gap: 6rem;
	align-items: center;
	justify-content: space-between;
}
.wrap_title {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.6rem;
	p {
		color: #ffe6e0;
		font-family: Jost;
		font-size: 2rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.92rem; /* 96% */
		letter-spacing: 0.1rem;
	}
	h1 {
		color: #fff;
		font-family: Podkova;
		font-size: 8rem;
		font-style: normal;
		font-weight: 600;
		line-height: 9.5rem; /* 118.75% */
	}
	h3 {
		color: #fff;
		font-family: Jost;
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 3.2rem; /* 133.333% */
	}
}
</style>
