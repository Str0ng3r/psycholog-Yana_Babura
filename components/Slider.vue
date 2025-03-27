<script lang="ts" setup>
// Import Swiper Vue.js components and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

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
		:modules="[Autoplay]"
		:slides-per-view="5"
		:autoplay="{ delay: 1000, disableOnInteraction: false }"
		:space-between="50"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
	>
		<swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
		<swiper-slide>Slide 4</swiper-slide>
		<swiper-slide>Slide 5</swiper-slide>
		<swiper-slide>Slide 6</swiper-slide>
		<swiper-slide>Slide 7</swiper-slide>
		<swiper-slide>Slide 8</swiper-slide>
		<swiper-slide>Slide 9</swiper-slide>
		<swiper-slide>Slide 10</swiper-slide>
		<swiper-slide>Slide 11</swiper-slide>
		<swiper-slide>Slide 12</swiper-slide>
		<swiper-slide>Slide 13</swiper-slide>
	</swiper>
</template>

<style scoped lang="scss">
/* You can adjust the container styling as needed */
</style>
