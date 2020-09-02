<template>
	<div class="Player">
		<div class="music">
			<img class="image" :src="Songurl" />
			<p class="songname">{{songname}}</p>
			<p class="author">{{author}}</p>
			<img v-if="isPlay" class="btn" @click="playClick" src="~assets/img/audio/play.svg" />
			<img v-else class="btn" @click="pauseClick" src="~assets/img/audio/pause.svg" />
			<img class="list_btn" @click="listClick" src="~assets/img/audio/list.svg" />
		</div>
		<van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
			<record-item
				v-for="(item,index) in recordList"
				:key="index"
				:recorditem="item"
				:index="index"
				:class="{'active':index==current}"
				@getRecorditemUrl="itemClick"
				@delete="handledelete"
			/>
		</van-popup>
		<audio :src="audioSrc" ref="audio"></audio>
	</div>
</template>

<script>
	import { getSongUrl } from "network/findpage/Findpage";

	import RecordItem from "components/recordIterm/RecordItem";

	export default {
		name: "Player",
		components: {
			RecordItem,
		},
		props: {},
		data() {
			return {
				isPlay: true,
				Songurl: this.$store.state.songurl,
				author: this.$store.state.author,
				songname: this.$store.state.songname,
				show: false,
				recordList: [],
				audioSrc: "",
				current: "",
			};
		},
		watch: {
			music_id(newValue, oldValue) {
				if (newValue) {
					this.recordList.unshift({
						songid: newValue,
						imgurl: this.$store.state.songurl,
						author: this.$store.state.author,
						songname: this.$store.state.songname,
					});
					getSongUrl(newValue).then((res) => {
						console.log(res);
						this.audioSrc = res.data.data[0].url;
					});
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
			music_id() {
				return this.$store.state.music_id;
			},
		},
		methods: {
			playClick() {
				this.isPlay = false;
				this.$refs.audio.play();
			},
			pauseClick() {
				this.isPlay = true;
				this.$refs.audio.pause();
			},
			listClick() {
				this.show = true;
			},
			itemClick(id, songname, author, imgurl, ind) {
				this.pauseClick();
				this.current = ind;
				this.Songurl = imgurl;
				this.author = author;
				this.songname = songname;
				getSongUrl(id).then((res) => {
					setTimeout(() => {
						this.audioSrc = res.data.data[0].url;
						setTimeout(() => {
							this.playClick();
						}, 100);
					}, 100);
				});
			},
			handledelete(index) {
				this.recordList.splice(index, 1);
			},
			activeClick(index) {
				this.active = true;
			},
		},
		created() {
			this.$bus.$on("getinfo", (res) => {
				for (let i = 0; i < res.songId.length; i++) {
					getSongUrl(res.songId[i]).then((res) => {
						console.log(res);
					});
				}
			});
		},
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
		right: 60px;
		width: 30px;
		height: 30px;
	}
	.music .list_btn {
		position: absolute;
		margin: 10px 0px;
		right: 10px;
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
	.music p {
		width: 200px;
		height: 24px;
		flex-wrap: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.image {
		margin: 5px 15px;
		width: 45px;
		height: 45px;
		border-radius: 50%;
	}
	.content {
		padding: 16px 16px 160px;
		background: pink;
	}
	.active {
		background: pink;
	}
</style>