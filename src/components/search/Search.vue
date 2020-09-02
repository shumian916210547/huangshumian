<template>
	<div class="Search">
		<form action="/">
			<van-search
				v-model="value"
				show-action
				placeholder="请输入搜索关键词"
				@cancel="onCancel"
				@search="onSearch"
			/>
		</form>
		<song-item v-for="(item,index) in searchList" :key="index" :songitem="item" :index="index" />
	</div>
</template>

<script>
	import { getSearch } from "network/findpage/Findpage";
	import SongItem from "components/songItem/SongItem";
	export default {
		name: "Search",
		components: {
			SongItem,
		},
		props: {},
		data() {
			return {
				value: "",
				searchList: [],
			};
		},
		watch: {},
		computed: {},
		methods: {
			onCancel() {
				this.$router.push("/find");
			},
			onSearch(val) {
				getSearch(val).then((res) => {
					this.searchList = [];
					this.searchList.push(...res.data.result.songs);
					console.log(this.searchList);
				});
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.Search {
		position: relative;
		top: -55px;
		left: 0px;
		right: 0px;
		padding: 20px 0 0 0;
	}
</style>