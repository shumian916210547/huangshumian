<template>
	<div class="MainTabBar">
		<div class="btn-drawer">
			<drawer />
		</div>
		<div class="nav">
			<tab-bar>
				<tab-bar-item path="/my">
					<div slot="Item-text">我的</div>
				</tab-bar-item>
				<tab-bar-item path="/find">
					<div slot="Item-text">发现</div>
				</tab-bar-item>
				<tab-bar-item>
					<div slot="Item-text">云村</div>
				</tab-bar-item>
				<tab-bar-item>
					<div slot="Item-text">视频</div>
				</tab-bar-item>
			</tab-bar>
		</div>
		<img src="~assets/img/search/search.svg" class="search" @click="mainClick" />
	</div>
</template>

<script>
	import TabBar from "components/tabBar/TabBar";
	import TabBarItem from "components/tabBar/TabBarItem";

	import Drawer from "components/drawer/Drawer";
	import Search from "components/search/Search";

	export default {
		name: "MainTabBar",
		components: {
			TabBarItem,
			TabBar,
			Drawer,
			Search,
		},
		props: {},
		data() {
			return {};
		},
		watch: {},
		computed: {},
		methods: {
			mainClick() {
				this.$router.push("/search");
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.MainTabBar {
		height: 45px;
		line-height: 45px;
	}
	.nav {
		width: 60%;
		float: left;
	}
	.btn-drawer {
		padding-left: 10px;
		float: left;
		width: 20%;
	}
	.search {
		position: relative;
		width: 20px;
		height: 20px;
		right: -35px;
		top: 5px;
	}
</style>