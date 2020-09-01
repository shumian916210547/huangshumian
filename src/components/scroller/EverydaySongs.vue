<template>
	<div class="EverydaySongs">
		<van-nav-bar title="每日推荐" left-text="返回" left-arrow @click-left="onLeftClick" />
		<song-item v-for="(item,index) in dailySongs" :key="index" :songitem="item" :index="index" />
	</div>
</template>

<script>
	import { getEverySongs } from "network/findpage/Findpage";
	import SongItem from "components/songItem/SongItem";
	export default {
		name: "EverydaySongs",
		components: {
			SongItem,
		},
		props: {},
		data() {
			return {
				dailySongs: [],
			};
		},
		watch: {},
		computed: {},
		methods: {
			onLeftClick() {
				this.$router.push("/find");
			},
		},
		created() {},
		activated() {
			this.dailySongs = [];
			getEverySongs().then((res) => {
				this.dailySongs.push(...res.data.data.dailySongs);
			});
		},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.EverydaySongs {
		position: relative;
		top: -55px;
		left: 0px;
		right: 0px;
	}
	.content {
		height: 60px;
	}
	.content img {
		width: 60px;
		height: 60px;
	}
	.content p {
		width: 280px;
		position: relative;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		top: -60px;
		left: 70px;
	}
	.content span {
		position: relative;
		top: -60px;
		left: 70px;
		color: rgb(184, 184, 184);
	}
</style>