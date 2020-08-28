<template>
	<div class="PlayList">
		<play-list-item
			v-for="(item,index) in CurretPlayList"
			:key="index"
			:playlistitem="item"
			class="item"
		></play-list-item>
	</div>
</template>

<script>
	import PlayListItem from "./PlayListItem";

	export default {
		name: "PlayList",
		components: {
			PlayListItem,
		},
		props: {
			CurretPlayList: {
				type: Array,
				default: {
					return: [],
				},
			},
		},
		data() {
			return {};
		},
		watch: {},
		computed: {},
		methods: {},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.PlayList {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-top: 10px;
	}
</style>