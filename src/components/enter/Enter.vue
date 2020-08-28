<template>
	<div class="Enter">
		<div class="head">
			<img :src="link" />
			<p>{{text_info}}</p>
			<span @click="enclick()" type="primary" v-show="isActive">立即登录</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Enter",
		components: {},
		props: {},
		data() {
			return {
				link: require("assets/img/headPortrait/head.svg"),
				text_info: "登录享受更多服务",
				isActive: true,
			};
		},
		watch: {},
		computed: {},
		methods: {
			enclick() {
				this.$router.push("/login");
			},
		},
		created() {
			this.text_info = this.$store.state.nickname;
			this.link = this.$store.state.avatarUrl;
			if (this.$store.state.nickname) {
				this.isActive = false;
			}
		},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.head {
		padding: 10px;
		height: 50px;
		position: relative;
		margin: 10px 10px 10px 10px;
	}
	.head img {
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.head p {
		position: absolute;
		left: 45px;
		font-size: 12px;
		top: 17px;
	}
	.head span {
		position: absolute;
		text-align: center;
		line-height: 22px;
		top: 15px;
		width: 65px;
		height: 22px;
		right: 10px;
		font-size: 12px;
		border-radius: 10px;
		border: 1px solid rgb(240, 240, 240);
	}
</style>