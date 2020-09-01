<template>
	<div class="ListDetails">
		<van-nav-bar title="歌单详情" left-text="返回" left-arrow @click-left="backClick" />
		<div class="nav">
			<img :src="res.data.playlist.coverImgUrl" />
			<p>{{res.data.playlist.name}}</p>
			<div class="van-multi-ellipsis--l2">{{res.data.playlist.description}}</div>
		</div>
		<song-item
			v-for="(item,index) in res.data.playlist.tracks"
			:key="index"
			:songitem="item"
			:index="index"
		/>
	</div>
</template>

<script>
	import SongItem from "components/songItem/SongItem";

	import { getListDetail } from "network/findpage/Findpage";

	export default {
		name: "ListDetails",
		components: {
			SongItem,
		},
		props: {},
		data() {
			return {
				res: {
					data: {
						playlist: "",
					},
				},
			};
		},
		watch: {},
		computed: {},
		methods: {
			backClick() {
				this.$router.back(-1);
			},
		},
		activated() {
			getListDetail(this.$store.state.songlistid).then((res) => {
				this.res = [];
				this.res = res;
			});
		},
		created() {},
		mounted() {},
		destroyed() {},
	};
</script>
<style lang="css" scoped>
	.ListDetails {
		position: relative;
		top: -45px;
		left: 0px;
		right: 0px;
	}
	.nav {
		margin: 15px;
		height: 100px;
	}
	.nav img {
		width: 100px;
		height: 100px;
	}
	.nav p:nth-child(2) {
		position: relative;
		width: 225px;
		font-size: 16px;
		top: -105px;
		left: 120px;
	}
	.nav div:nth-child(3) {
		position: absolute;
		width: 225px;
		height: 32px;
		font-size: 12px;
		top: 125px;
		left: 135px;
		color: rgb(182, 182, 182);
	}
</style>