<template>
	<div class="Player">
		<div class="music"></div>
		<audio :src="music_src"></audio>
	</div>
</template>

<script>
	export default {
		name: "Player",
		components: {},
		props: {},
		data() {
			return {};
		},
		watch: {},
		computed: {
			music_src() {
				return this.$store.state.music_src;
			},
		},
		methods: {},
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
		height: 44px;
		background: rgb(50, 50, 50);
		overflow: hidden;
	}
</style>