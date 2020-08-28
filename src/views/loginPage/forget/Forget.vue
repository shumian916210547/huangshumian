<template>
	<div class="Forget">
		<Modal v-model="modal6" :fullscreen="true" :closable="false" :footer-hide="true"></Modal>
	</div>
</template>

<script>
	export default {
		name: "Forget",
		components: {},
		props: {},
		data() {
			return {
				modal6: true,
				loading: true,
			};
		},
		watch: {},
		computed: {},
		methods: {},
		created() {},
		mounted() {},
	};
</script>
<style lang="css" scoped>
</style>