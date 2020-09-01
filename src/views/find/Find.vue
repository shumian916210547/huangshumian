<template>
	<div class="Find">
		<scroll ref="content" :probe-type="3" class="content">
			<carousel />
			<scroller />
			<playlist-selection />
			<courie />
			<song-list />
		</scroll>
	</div>
</template>

<script>
	import { getCarousel } from "network/carousel/Carousel";
	import {
		getPlaylistSelection,
		getNewSong,
		getSongList,
		getEverySongs,
	} from "network/findpage/Findpage";

	import Carousel from "components/carousel/Carousel";
	import Scroller from "components/scroller/Scroller";
	import PlaylistSelection from "components/playlistSelection/PlaylistSelection";
	import Courie from "components/courie/Courie";
	import SongList from "components/songList/SongList";
	import Scroll from "components/bscroll/BScroll";

	export default {
		name: "Find",
		components: {
			Carousel,
			Scroller,
			PlaylistSelection,
			Courie,
			SongList,
			Scroll,
		},
		props: {},
		data() {
			return {};
		},
		created() {
			this.Carousel();
			this.PlaylistSelection();
			this.NewSong();
			this.SongList();
		},
		mounted() {
			this.$refs.content.scroll.on("scroll", (position) => {});
		},
		watch: {},
		computed: {},
		methods: {
			Carousel() {
				getCarousel().then((res) => {
					this.$bus.$emit("getCarousel", res);
				});
			},
			PlaylistSelection() {
				getPlaylistSelection().then((res) => {
					this.$bus.$emit("getPlaylistSelection", res);
				});
			},
			NewSong() {
				getNewSong().then((res) => {
					this.$bus.$emit("getNewSong", res);
				});
			},
			SongList() {
				getSongList().then((res) => {
					this.$bus.$emit("getSongList", res);
				});
			},
		},
	};
</script>
<style lang="css" scoped>
	.Find {
		width: 100%;
	}
	.title {
		margin-left: 10px;
	}
	.content {
		position: absolute;
		overflow: hidden;
		top: 44px;
		bottom: 44px;
		left: 0;
		right: 0;
	}
</style>