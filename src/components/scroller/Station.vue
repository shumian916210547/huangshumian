<template>
	<div class="Station">
		<Modal v-model="modal" :fullscreen="true" :footer-hide="true" :closable="false">
			<van-nav-bar title="电台" left-text="返回" left-arrow @click-left="onLeftClick" />
		</Modal>
	</div>
</template>

<script>
	import { getBanner } from "network/findpage/Findpage";

	export default {
		name: "Station",
		components: {},
		props: {},
		data() {
			return {
				modal: true,
			};
		},
		watch: {},
		computed: {},
		methods: {
			onLeftClick() {
				this.$router.push("/find");
				this.modal = false;
			},
		},
		created() {},
		activated() {
			this.modal = true;
			getBanner().then((res) => {
				console.log(res);
			});
		},
		mounted() {},
	};
</script>
<style lang="css" scoped>
</style>