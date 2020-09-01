<template>
	<div
		class="SongItem"
		@click="songid(songitem.id,songitem.name)"
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
			songid(id, name) {
				this.$store.commit("set_music_src", "");
				console.log(id, name);
				getSongUrl(id).then((res) => {
					console.log(res);
					this.$store.commit("set_music_src", res.data.data[0].url);
				});
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.SongItem {
		margin: 10px 0px;
		height: 60px;
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