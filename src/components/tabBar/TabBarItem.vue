<template>
	<div class="TabBarItem" @click="itemClick">
		<div :class="{'active':isActive}">
			<slot name="Item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		components: {},
		props: {
			path: {
				type: String,
			},
		},
		data() {
			return {};
		},
		watch: {},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1;
			},
		},
		methods: {
			itemClick() {
				this.$router.push(this.path);
			},
		},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
	.TabBarItem {
		color: rgb(184, 184, 184);
		text-align: center;
		flex: 1;
	}
	.active {
		transition: 0.5s;
		color: black;
		font-size: 16px;
	}
</style>