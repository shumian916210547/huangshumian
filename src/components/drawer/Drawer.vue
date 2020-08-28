<template>
	<div class="Drawer">
		<div class="icon">
			<i @click="value2 = true" type="primary" class="iconfont icon-zhankai"></i>
		</div>
		<Drawer placement="left" :closable="false" v-model="value2">
			<div>
				<tr>
					<h3>个人信息</h3>
				</tr>
			</div>
			<div class="Row">
				<tr>
					<td>昵称：{{nickname}}</td>
					<td>手机号：{{phone}}</td>
				</tr>
			</div>
			<div class="Row">
				<tr>
					<td>城市：{{city}}</td>
					<td>性别：{{sex}}</td>
				</tr>
			</div>
			<div class="exit-btn">
				<img src="~assets/img/Drawer/exit.svg" />
				<span @click="exitClick">退出</span>
			</div>
		</Drawer>
	</div>
</template>
<script>
	import { getSiteList } from "network/getSite/Site";
	import { exit } from "network/login/Login";

	export default {
		data() {
			return {
				value2: false,
				phone: "",
				city: this.$store.state.city,
				nickname: this.$store.state.nickname,
				sex: "",
				userInfo: "",
			};
		},
		methods: {
			exitClick() {
				this.$store.commit("set_token", null);
				this.$store.commit("set_nickname", null);
				this.$store.commit("set_avatarUrl", null);
				this.value2 = false;
				exit(), this.$router.push("/login");
			},
		},
		created() {
			this.$bus.$on("getInfo", (res) => {
				/* console.log(res); */
				//保存用户数据
				this.userInfo = res;
				//获取用户地址
				getSiteList(this.userInfo.data.profile.province).then((res) => {
					for (var i = 0; i < res.data.districts.length; i++) {
						for (var j = 0; j < res.data.districts[i].districts.length; j++) {
							if (
								res.data.districts[i].districts[j].adcode ==
								this.userInfo.data.profile.city
							) {
								this.$store.commit(
									"set_city",
									res.data.districts[i].districts[j].name
								);
							}
						}
					}
				});
			});
		},
	};
</script>

<style scoped>
	@import "~assets/img/Drawer/iconfont.css";

	.Drawer {
		height: 45px;
	}
	.icon {
		color: rgb(122, 122, 122);
	}
	tr {
		display: flex;
	}
	td {
		flex: 1;
	}
	.Row {
		margin: 25px 0;
	}
	.exit-btn {
		width: 55px;
		height: 16px;
		position: absolute;
		right: 15px;
		bottom: 5px;
	}
	.exit-btn span {
		position: relative;
		top: -3px;
	}
	.exit-btn img {
		margin: 0 5px;
		width: 16px;
		height: 16px;
	}
</style>