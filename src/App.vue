<template>
	<div class="App">
		<main-tab-bar />
		<keep-alive>
			<router-view />
		</keep-alive>
		<player />
	</div>
</template>

<script>
	import MainTabBar from "components/mainTabBar/MainTabBar";
	import Player from "components/player/Player";
	export default {
		name: "App",
		components: {
			MainTabBar,
			Player,
		},
		props: {},
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
<style lang="css" >
	@import url("./assets/css/baseCss.css");
</style>
