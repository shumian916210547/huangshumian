<template>
	<div class="PlaylistSelection">
		<div class="nav">
			<h3 class="title">人气歌单推荐</h3>
			<p class="btn" @click="morelist">查看更多</p>
		</div>
		<van-swipe :loop="false" :width="120" :show-indicators="false">
			<van-swipe-item v-for="(item,index) in result" :key="index">
				<img :src="result[index].picUrl" />
				<div class="playCount">
					<img src="~assets/img/playCount/play.svg" />
					<i>{{simplify(result[index].playCount)}}</i>
				</div>
				<p>{{result[index].name}}</p>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		name: "PlaylistSelection",
		components: {},
		props: {},
		data() {
			return {
				result: [],
			};
		},
		watch: {},
		computed: {},
		methods: {
			morelist() {
				this.$router.push("/songlist");
			},
		},
		created() {
			this.$bus.$on("getPlaylistSelection", (res) => {
				this.result = [];
				this.result.push(...res.data.result);
			});
		},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.nav {
		height: 24px;
		position: relative;
		left: 0px;
	}
	.title {
		position: absolute;
		left: 10px;
	}
	.btn {
		text-align: center;
		font-size: 10px;
		width: 60px;
		border-radius: 10px;
		border: 1px solid rgb(242, 242, 242);
		position: absolute;
		right: 10px;
	}
	.van-swipe {
		margin: 5px 0px 0px 10px;
		height: 170px;
	}
	.van-swipe-item img {
		border-radius: 10px;
		height: 120px;
		width: 110px;
	}
	.van-swipe-item p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 110px;
	}
	.playCount {
		right: 15px;
		top: 0;
		position: absolute;
		color: white;
	}
	.playCount img {
		width: 12px;
		height: 12px;
	}
</style>