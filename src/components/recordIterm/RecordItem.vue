<template>
	<div
		class="RecordItem"
		@click="itemClick(recorditem.songid,recorditem.songname,recorditem.author,recorditem.imgurl,index)"
	>
		<p>{{index+1}}</p>
		<p>{{recorditem.songname}}</p>
		<p>{{recorditem.author}}</p>
		<img @click="handledelete(index)" src="~assets/img/audio/delete.svg" />
	</div>
</template>

<script>
	export default {
		name: "RecordItem",
		components: {},
		props: {
			recorditem: {
				type: Object,
			},
			index: {
				type: Number,
			},
		},
		data() {
			return {};
		},
		watch: {},
		computed: {},
		methods: {
			itemClick(id, songname, author, imgurl, index) {
				this.$emit("getRecorditemUrl", id, songname, author, imgurl, index);
			},
			handledelete(index) {
				this.$emit("delete", index);
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.RecordItem {
		width: 100%;
		height: 55px;
	}
	.RecordItem p:nth-child(1) {
		font-size: 16px;
		text-align: center;
		height: 60px;
		width: 60px;
		line-height: 60px;
		color: rgb(181, 181, 181);
	}
	.RecordItem p:nth-child(2) {
		position: relative;
		font-size: 16px;
		width: 295px;
		left: 80px;
		bottom: 50px;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.RecordItem p:nth-child(3) {
		position: relative;
		font-size: 14px;
		width: 295px;
		left: 80px;
		bottom: 50px;
		color: rgb(181, 181, 181);
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.RecordItem img {
		position: relative;
		width: 22px;
		height: 22px;
		bottom: 85px;
		left: 80%;
	}
</style>