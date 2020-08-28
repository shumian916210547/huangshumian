<template>
	<div class="App">
		<main-tab-bar />
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
</template>

<script>
	import MainTabBar from "components/mainTabBar/MainTabBar";
	export default {
		name: "App",
		components: {
			MainTabBar,
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
