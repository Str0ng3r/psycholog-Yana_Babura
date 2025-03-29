<script lang="ts" setup>
// Import Swiper Vue.js components and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation'; // Добавляем стили для кнопок навигации
import { Navigation, Autoplay } from 'swiper/modules'; // Импорт модулей
interface Review {
	title: string;
	desc: string;
	stars: number;
}
const props = defineProps({
	reviews: Array<Review>,
});

// Import Swiper types
import type { Swiper as SwiperInstance } from 'swiper';

// Function that handles the Swiper instance
const onSwiper = (swiper: SwiperInstance) => {
	console.log(swiper);
};

const onSlideChange = () => {
	console.log('slide change');
};
</script>
<template>
	<swiper
		:modules="[Navigation, Autoplay]"
		:slides-per-view="1"
		:autoplay="{ delay: 6000, disableOnInteraction: false }"
		:space-between="50"
		:pagination="true"
		:grabCursor="true"
		:loop="true"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
		class="custom-swiper"
		><swiper-slide v-for="item in reviews">
			<CardReviewer
				:title="item.title"
				:desc="item.desc"
				:stars="item.stars"
			></CardReviewer>
		</swiper-slide>
	</swiper>
</template>

<style scoped lang="scss">
.custom-swiper {
	position: relative;
	width: 100%;
}
.swiper {
	display: flex;
}
.swiper-button-prev,
.swiper-button-next {
	color: #5b3128 !important; // Цвет стрелок
	background: rgba(255, 255, 255, 0.8); // Фон стрелок
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.swiper-button-prev::after,
.swiper-button-next::after {
	font-size: 20px;
	font-weight: bold;
}

.swiper-button-prev {
	left: -50px;
}

.swiper-button-next {
	right: -50px;
}
/* You can adjust the container
 styling as needed */
</style>
