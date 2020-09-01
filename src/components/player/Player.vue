<template>
	<div class="Player">
		<div class="music">
			<img class="image" :src="Songurl" />
			<i class="songname">{{songname}}</i>
			<i class="author">{{author}}</i>

			<img v-if="isPlay" class="btn" @click="playClick" src="~assets/img/audio/play.svg" />
			<img v-else class="btn" @click="pauseClick" src="~assets/img/audio/pause.svg" />
			<img class="list_btn" src="~assets/img/audio/list.svg" />
		</div>
		<audio :src="music_src" ref="audio"></audio>
	</div>
</template>

<script>
	export default {
		name: "Player",
		components: {},
		props: {},
		data() {
			return {
				isPlay: true,
				Songurl: this.$store.state.songurl,
				author: this.$store.state.author,
				songname: this.$store.state.songname,
			};
		},
		watch: {
			music_src(newValue) {
				if (newValue) {
					setTimeout(() => {
						this.Songurl = this.$store.state.songurl;
						this.author = this.$store.state.author;
						this.songname = this.$store.state.songname;
						setTimeout(() => {
							this.playClick();
						}, 100);
					}, 100);
				} else {
					this.pauseClick();
				}
			},
		},
		computed: {
			music_src() {
				return this.$store.state.music_src;
			},
		},
		methods: {
			playClick() {
				console.log(1);
				this.isPlay = false;
				this.$refs.audio.play();
			},
			pauseClick() {
				console.log(2);
				this.isPlay = true;
				this.$refs.audio.pause();
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.Player {
		z-index: 99;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 55px;
		background: rgb(50, 50, 50);
		overflow: hidden;
	}
	.music .btn {
		position: absolute;
		margin: 12.5px 0px;
		right: 80px;
		width: 30px;
		height: 30px;
	}
	.music .list_btn {
		position: absolute;
		margin: 10px 0px;
		right: 30px;
		width: 35px;
		height: 35px;
	}
	.music .songname {
		position: absolute;
		font-size: 16px;
		color: white;
		top: 7px;
		left: 80px;
	}
	.music .author {
		position: absolute;
		top: 30px;
		left: 80px;
	}

	.image {
		margin: 5px 15px;
		width: 45px;
		height: 45px;
		border-radius: 50%;
	}
</style>