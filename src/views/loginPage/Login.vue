<template>
	<div class="Login">
		<Modal v-model="modal" :fullscreen="true" :footer-hide="true" :closable="false">
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
				<span class="forget" @click="Forgetclick">忘记密码</span>
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
		</Modal>
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
				modal: true,
				username: "",
				password: "",
				res: "",
			};
		},
		watch: {
			$route(to, from) {
				if (to.path == "/login") {
					this.modal = true;
				}
			},
		},
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
							this.modal = false;
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
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	form {
		position: relative;
		top: 35%;
	}
	.forget {
		color: blue;
		position: relative;
		left: 260px;
		bottom: 30px;
	}
</style>