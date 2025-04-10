<script lang="ts" setup>
// Import Swiper Vue.js components and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation'; // Добавляем стили для кнопок навигации
import { Navigation, Autoplay } from 'swiper/modules'; // Импорт модулей
// Import Swiper types
import type { Swiper as SwiperInstance } from 'swiper';

// Function that handles the Swiper instance
const onSwiper = (swiper: SwiperInstance) => {
	console.log(swiper);
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
		class="custom-swiper"
	>
		<swiper-slide
			><img
				src="../assets/img/sertif0.webp"
				alt="Sertificate"
				class="img_sertificate"
				loading="lazy"
		/></swiper-slide>
		<swiper-slide
			><img
				src="../assets/img/sertif2.webp"
				alt="Sertificate"
				class="img_sertificate"
				loading="lazy"
		/></swiper-slide>
		<swiper-slide
			><img
				src="../assets/img/sertif1.webp"
				alt="Sertificate"
				class="img_sertificate"
				loading="lazy"
		/></swiper-slide>
		<swiper-slide
			><img
				src="../assets/img/sertif3.webp"
				alt="Sertificate"
				class="img_sertificate"
				loading="lazy"
		/></swiper-slide>
		<swiper-slide
			><img
				src="../assets/img/sertif6.webp"
				alt="Sertificate"
				class="img_sertificate"
				loading="lazy"
		/></swiper-slide>
		<swiper-slide
			><img
				src="../assets/img/sertif5.webp"
				alt="Sertificate"
				class="img_sertificate"
				loading="lazy"
		/></swiper-slide>
	</swiper>
</template>

<style scoped lang="scss">
.custom-swiper {
	position: relative;
	width: 100%;
}
.img_sertificate {
	height: 100%;
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
