<template>
	<div class="songList">
		<van-nav-bar title="歌单广场" left-text="返回" left-arrow @click-left="onLeftClick" />
		<van-tabs @click="Onclick" :sticky="true" :offset-top="46">
			<van-tab v-for="(item,index) in navTitle" :key="index" :title="navTitle[index]">
				<play-list :CurretPlayList="showCurrent" />
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import { getCatlist, getPlaylist } from "network/findpage/Findpage";

	import PlayList from "components/playlist/PlayList";

	export default {
		name: "songList",
		components: {
			PlayList,
		},
		props: {},
		data() {
			return {
				navTitle: [],
				list: [],
			};
		},
		watch: {},
		computed: {
			showCurrent() {
				return this.list;
			},
		},
		methods: {
			Onclick(name, title) {
				getPlaylist(title).then((res) => {
					this.list = [];
					this.list.push(...res.data.playlists);
				});
			},

			onLeftClick() {
				this.$router.push("/find");
			},
		},
		created() {
			this.Onclick(0);
		},
		activated() {
			getCatlist().then((res) => {
				this.navTitle = [];
				this.navTitle.push(res.data.all.name);
				for (var i = 0; i < 9; i++) {
					this.navTitle.push(res.data.sub[i].name);
				}
			});
		},

		mounted() {},
	};
</script>
<style lang="css" scoped>
	.songList {
		position: relative;
		top: -45px;
		left: 0px;
		right: 0px;
	}
	.van-hairline--bottom::after {
		border-bottom-width: 0px;
	}

	.ivu-menu-horizontal {
		height: 35px;
		line-height: 35px;
	}
</style>