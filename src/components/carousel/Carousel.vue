<template>
	<div class="Carousel">
		<Carousel autoplay v-model="value2" loop :radius-dot="true" arrow="always">
			<CarouselItem v-for="(item,index) in banners" :key="index">
				<img :src="banners[index].pic" />
			</CarouselItem>
		</Carousel>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value2: 0,
				banners: [],
			};
		},
		created() {
			this.$bus.$on("getCarousel", (res) => {
				this.banners.push(...res.data.banners);
			});
		},
	};
</script>

<style scoped>
	.Carousel {
		height: 150px;
		text-align: center;
	}
	.Carousel img {
		border-radius: 10px;
		height: 140px;
		width: 350px;
	}
</style>