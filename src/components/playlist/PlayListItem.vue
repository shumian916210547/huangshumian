<template>
	<div class="PlayListItem" @click="itemClick(playlistitem.id)">
		<img :src="playlistitem.coverImgUrl||playlistitem.picUrl" />
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
				this.$store.commit("set_songlistid", "");
				this.$router.push("/listdetails");
				this.$store.commit("set_songlistid", id);
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.PlayListItem {
		width: 105px;
	}
	.PlayListItem img {
		width: 100%;
		border-radius: 10px;
	}
	.playCount {
		width: 65px;
		left: 46px;
		bottom: 150px;
		position: relative;
		color: white;
	}
	.playCount img {
		width: 12px;
		height: 12px;
	}
	.PlayListItem p {
		max-width: 105px;
		height: 36px;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>