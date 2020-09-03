<template>
	<div class="Login">
		<p class="title">网易云账号直接登录</p>
		<van-form @submit="onSubmit(username, password)">
			<van-field
				:required="true"
				v-model="username"
				name="用户名"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				:required="true"
				v-model="password"
				type="password"
				name="密码"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<span class="forget" @click="Forgetclick">忘记密码?</span>
			<span class="verify" @click="codeClick">验证码登录</span>
			<div style="margin: 16px;">
				<van-button
					round
					block
					type="info"
					native-type="submit"
					@submit="onSubmit(username, password)"
				>提交</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
	import { login } from "network/login/Login";

	export default {
		name: "Login",
		components: {},
		props: {},
		data() {
			return {
				username: "",
				password: "",
				res: "",
			};
		},
		watch: {},
		computed: {},
		methods: {
			onSubmit(username, password) {
				login(username, password).then((res) => {
					this.res = res.data;
					var userName = "1_" + this.username;
					if (userName !== this.res.account.userName) {
						alert("账户不存在");
					} else {
						if (this.res.code == 200) {
							this.$store.commit("set_token", res.data.token);
							this.$store.commit("set_cookie", res.data.cookie);
							this.$store.commit("set_nickname", res.data.profile.nickname);
							this.$store.commit("set_avatarUrl", res.data.profile.avatarUrl);
							console.log((document.cookie = this.$store.state.cookie));
							this.$router.push("/my");
							setTimeout(() => {
								this.$bus.$emit("getInfo", res);
							}, 500);
						} else {
							alert("密码错误");
						}
					}
				});
			},
			Forgetclick() {
				this.$router.push("/forget");
			},
			codeClick() {
				this.$router.push("/verificationcode");
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.Login {
		position: absolute;
		background: white;
		top: -55px;
		left: 0px;
		right: 0px;
		bottom: 0px;
	}
	form {
		position: relative;
		top: 35%;
	}
	.forget {
		color: blue;
		position: absolute;
		right: 25px;
		bottom: 70px;
	}
	.verify {
		color: blue;
		position: absolute;
		right: 25px;
		bottom: 30px;
	}
	.van-button {
		top: 25px;
	}
	.title {
		text-align: center;
		position: relative;
		top: 100px;
		font-size: 18px;
		color: blue;
	}
</style>