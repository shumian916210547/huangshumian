<template>
	<div class="VerificationCode">
		<van-nav-bar left-text="验证码登录" left-arrow @click-left="backClick" />
		<i>2222</i>
	</div>
</template>

<script>
	export default {
		name: "VerificationCode",
		components: {},
		props: {},
		data() {
			return {};
		},
		watch: {},
		computed: {},
		methods: {
			backClick() {
				this.$router.push("/login");
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.VerificationCode {
		position: absolute;
		background: white;
		top: -55px;
		left: 0px;
		right: 0px;
		bottom: -55px;
	}
</style>