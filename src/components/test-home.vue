<template>
	<section class="view home">this is fist pages.</section>
</template>

<script>
	import { DETAIL_REQUEST } from '../store/mutation-types';
	export default {
		created() {
			this.$store
                .dispatch(DETAIL_REQUEST, { articleId: 1080 })
                .then((res) => {
                    // if (res.success) {
						console.log(res)
                    // }
                })
		}
	}
</script>


<style lang="less">

	.home {
		font-size: 16px;
		line-height: 1em;
		text-align: center;
	}
</style>
