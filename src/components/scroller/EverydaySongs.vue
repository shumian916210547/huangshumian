<template>
	<div class="EverydaySongs">
		<Modal v-model="modal" :fullscreen="true" :footer-hide="true">
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
		methods: {},
		created() {
			this.$bus.$on("ESdata", (modal, res) => {
				this.dailySongs = [];
				this.modal = modal;
				this.dailySongs.push(...res.data.data.dailySongs);
				console.log(this.dailySongs);
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