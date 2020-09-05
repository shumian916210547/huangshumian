<template>
	<div class="Forget">
		<van-nav-bar left-text="忘记密码" left-arrow @click-left="backClick" />
		<van-field v-model="tel" type="tel" label="+86" placeholder="请输入手机号" />
		<van-field v-model="nickname" label="昵称" placeholder="请设置新昵称" />
		<van-field
			v-model="password"
			type="password"
			label="新密码"
			autocomplete="new-password"
			placeholder="请输入新密码"
		/>
		<van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
			<template #button>
				<van-button size="small" type="primary" @click="smsClick">{{msg}}</van-button>
			</template>
		</van-field>
		<button class="submit" @click="submitClick">提交</button>
	</div>
</template>


<script>
	import { sendcode, submit } from "network/login/Login";

	export default {
		name: "Forget",
		components: {},
		props: {},
		data() {
			return {
				tel: "",
				sms: "",
				password: "",
				nickname: "",
				timer: null,
				msg: "获取验证码",
				downtime: 60,
				finally: 0,
			};
		},
		watch: {},
		computed: {},
		methods: {
			backClick() {
				this.$router.push("/login");
			},
			smsClick() {
				if (this.tel.length == 11) {
					if (this.nickname !== "") {
						if (this.password.length >= 6 && this.password.length) {
							if (this.downtime > 0 && this.downtime <= 60) {
								if (this.downtime < 60) {
									return false;
								}
								sendcode(this.tel).then((res) => {
									if (res.data.code == 200) {
										alert("验证码发送成功");
									}
								});
								this.timer = setInterval(() => {
									this.downtime--;
									if (this.downtime != 0) {
										this.msg = "重新发送  " + this.downtime + "s";
									} else {
										clearInterval(this.timer);
										this.msg = "重新发送 ";
										this.downtime = 60;
									}
								}, 1000);
							}
						} else {
							alert("密码长度不符合");
						}
					} else {
						alert("昵称未设置");
					}
				} else {
					this.tel == "";
					alert("手机号错误");
				}
			},
			submitClick() {
				if (this.tel.length == 11) {
					if (this.nickname !== "") {
						if (this.password.length >= 6 && this.password.length) {
							submit(this.sms, this.tel, this.password, this.nickname).then(
								(res) => {
									if (res.data.code == 200) {
										this.$router.push("/login");
										alert("success");
									} else {
										alert("error");
									}
								}
							);
						} else {
							this.password = "";
							alert("密码长度不符合");
						}
					} else {
						alert("昵称未设置");
					}
				} else {
					this.tel == "";
					alert("手机号错误");
				}
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.Forget {
		position: absolute;
		background: white;
		top: -55px;
		left: 0px;
		right: 0px;
		bottom: -55px;
		padding: 55px 10px 0px 10px;
		height: 100%;
	}
	.van-nav-bar {
		margin-bottom: 10px;
	}
	.submit {
		margin-top: 50px;
		font-size: 16px;
		width: 100%;
		height: 40px;
		background: rgb(234, 80, 136);
		border: 0px;
		border-radius: 20px;
	}
</style>