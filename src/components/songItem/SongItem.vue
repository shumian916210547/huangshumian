<template>
	<div
		class="SongItem"
		@click="songid(songitem.id,songitem.name,songitem.ar[0].name,songitem.al.picUrl)"
		:class="index % 2 ? 'even_num' : 'sin_num'"
	>
		<p>{{index+1}}</p>
		<p>{{songitem.name}}</p>
		<p>{{songitem.ar[0].name}} - {{songitem.al.name}}</p>
	</div>
</template>

<script>
	import { getSongUrl } from "network/findpage/Findpage";

	export default {
		name: "SongItem",
		components: {},
		props: {
			songitem: {
				type: Object,
			},
			index: {
				type: Number,
			},
		},
		data() {
			return {};
		},
		watch: {},
		computed: {},
		methods: {
			songid(id, songname, author, songurl) {
				this.$store.commit("set_music_id", id);
				this.$store.commit("set_songname", songname);
				this.$store.commit("set_author", author);
				this.$store.commit("set_songurl", songurl);
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.SongItem {
		margin: 5px 0px;
		height: 55px;
	}
	.SongItem p:nth-child(1) {
		font-size: 16px;
		text-align: center;
		height: 60px;
		width: 60px;
		line-height: 60px;
		color: rgb(181, 181, 181);
	}
	.SongItem p:nth-child(2) {
		position: relative;
		font-size: 16px;
		width: 295px;
		left: 80px;
		bottom: 50px;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.SongItem p:nth-child(3) {
		position: relative;
		font-size: 14px;
		width: 295px;
		left: 80px;
		bottom: 50px;
		color: rgb(181, 181, 181);
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.even_num {
		background: rgb(230, 230, 230);
	}
	.sin_num {
		background: pink;
	}
</style>