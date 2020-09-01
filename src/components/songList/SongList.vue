<template>
	<div class="SongList">
		<div class="nav">
			<h3 class="title">爱上音乐</h3>
			<p class="btn" @click="more">查看更多</p>
		</div>
		<van-swipe :loop="false" :width="125" :show-indicators="false" :stop-propagation="false">
			<van-swipe-item v-for="(item,index) in result" :key="index">
				<playlist-item :playlistitem="item" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import PlaylistItem from "../playlist/PlayListItem";
	export default {
		name: "SongList",
		components: {
			PlaylistItem,
		},
		props: {},
		data() {
			return {
				result: [],
			};
		},
		watch: {},
		computed: {},
		methods: {
			more() {
				this.$router.push("/songlist");
			},
		},
		created() {
			this.$bus.$on("getSongList", (res) => {
				this.result = [];
				this.result.push(...res.data.playlists);
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
	.van-swipe-item {
		margin: 15px 10px;
		width: 105px !important;
		height: 145px;
	}
</style>