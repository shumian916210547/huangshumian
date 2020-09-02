<template>
	<div class="MyBtn">
		<div class="nav_btn">
			<div>
				<img src="~assets/img/headPortrait/bendi.svg" />
				<p>本地音乐</p>
			</div>
			<div>
				<img src="~assets/img/headPortrait/jilu.svg" />
				<p>播放记录</p>
			</div>
			<div>
				<img src="~assets/img/headPortrait/diantai.svg" />
				<p>电台</p>
			</div>
			<div>
				<img src="~assets/img/headPortrait/shoucang.svg" />
				<p>歌单收藏</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MyBtn",
		components: {},
		props: {},
		data() {
			return {
				recordList: [],
			};
		},
		watch: {},
		computed: {},
		methods: {},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.nav_btn {
		display: flex;
	}
	.nav_btn div {
		flex: 1;
		text-align: center;
	}
	.nav_btn div p {
		font-size: 12px;
	}
	.nav_btn img {
		width: 35px;
		height: 35px;
	}
</style>