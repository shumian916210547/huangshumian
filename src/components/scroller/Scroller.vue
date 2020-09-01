<template>
	<div class="Scroller">
		<van-swipe class="my-swipe" :loop="false" indicator-color="red" :show-indicators="false">
			<van-swipe-item>
				<span @click="getES">每日推荐</span>
				<span @click="getSL">歌单</span>
				<span @click="getSta">电台</span>
				<span>直播</span>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import { getEverySongs, getCatlist } from "network/findpage/Findpage";

	export default {
		name: "Scroller",
		components: {},
		props: {},
		data() {
			return {
				current: "1",
			};
		},
		watch: {},
		computed: {},
		methods: {
			getES() {
				this.$router.push("/everydaysongs");
			},
			getSL() {
				this.$router.push("/songlist");
			},
			getSta() {
				this.$router.push("/station");
			},
		},
		created() {},
		mounted() {},
	};
</script>

<style lang="css" scoped>
	.my-swipe {
		margin: 10px 20px;
	}
	.my-swipe .van-swipe-item {
		height: 40px;
		line-height: 30px;
		display: flex;
	}
	.my-swipe .van-swipe-item span {
		border-radius: 10px;
		background: rgb(242, 242, 242);
		margin: 5px;
		text-align: center;
		font-size: 12px;
		flex: 1;
		height: 30px;
	}
</style>