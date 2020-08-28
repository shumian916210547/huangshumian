<template>
	<div class="PlayListItem" @click="itemClick(playlistitem.id)">
		<img :src="playlistitem.coverImgUrl" />
		<p>{{playlistitem.name}}</p>
		<div class="playCount">
			<img src="~assets/img/playCount/play.svg" />
			<span>{{simplify(playlistitem.playCount)}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PlayListItem",
		components: {},
		props: {
			playlistitem: {
				type: Object,
				default: {
					return: "",
				},
			},
		},
		data() {
			return {};
		},
		watch: {},
		computed: {},
		methods: {
			itemClick(id) {
				this.$router.push("/listdetails");
				this.$store.commit("set_songlistid", "");
				this.$store.commit("set_songlistid", id);
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.PlayListItem {
		width: 165px;
	}
	.PlayListItem img {
		width: 100%;
	}
	.playCount {
		width: 65px;
		left: 105px;
		bottom: 210px;
		position: relative;
		color: white;
	}
	.playCount img {
		width: 12px;
		height: 12px;
	}
	.PlayListItem p {
		max-width: 165px;
		height: 40px;
	}
</style>