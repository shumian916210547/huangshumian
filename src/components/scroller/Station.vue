<template>
	<div class="Station">
		<van-nav-bar title="电台" left-text="返回" left-arrow @click-left="onLeftClick" />
	</div>
</template>

<script>
	import { getBanner } from "network/findpage/Findpage";

	export default {
		name: "Station",
		components: {},
		props: {},
		data() {
			return {};
		},
		watch: {},
		computed: {},
		methods: {
			onLeftClick() {
				this.$router.push("/find");
			},
		},
		created() {},
		activated() {
			getBanner().then((res) => {
				console.log(res);
			});
		},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.Station {
		position: relative;
		top: -45px;
		left: 0px;
		right: 0px;
	}
</style>