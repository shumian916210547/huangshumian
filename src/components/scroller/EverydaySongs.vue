<template>
	<div class="EverydaySongs">
		<Modal v-model="modal" :fullscreen="true" :footer-hide="true">
			<van-nav-bar title="每日推荐" left-text="返回" left-arrow @click-left="onLeftClick" />
			<van-list>
				<van-cell v-for="(item,index) in dailySongs" :key="index">
					<div class="content">
						<img :src="dailySongs[index].al.picUrl" />
						<p>{{dailySongs[index].name}}</p>
						<span>{{dailySongs[index].ar[0].name}}</span>
					</div>
				</van-cell>
			</van-list>
		</Modal>
	</div>
</template>

<script>
	import { getEverySongs } from "network/findpage/Findpage";

	export default {
		name: "EverydaySongs",
		components: {},
		props: {},
		data() {
			return {
				modal: false,
				dailySongs: [],
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
			this.dailySongs = [];
			getEverySongs().then((res) => {
				this.dailySongs.push(...res.data.data.dailySongs);
			});
		},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.content {
		height: 60px;
	}
	.content img {
		width: 60px;
		height: 60px;
	}
	.content p {
		width: 280px;
		position: relative;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		top: -60px;
		left: 70px;
	}
	.content span {
		position: relative;
		top: -60px;
		left: 70px;
		color: rgb(184, 184, 184);
	}
</style>