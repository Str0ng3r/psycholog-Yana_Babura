<script lang="ts" setup></script>

<template>
	<div class="body_container">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
.body_container {
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>
