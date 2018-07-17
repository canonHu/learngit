<template>
	<section class="view home">
		<section class="home-head">
			<home-header></home-header>
		</section>
	</section>
</template>

<script>
	import { DETAIL_REQUEST } from '../store/mutation-types';
	import homeHeader from './home-header.vue';

	export default {
		components: {
			homeHeader
		},
		
		created() {
			// this.$store
            //     .dispatch(DETAIL_REQUEST, { articleId: 1080 })
            //     .then((res) => {
                    // if (res.success) {
						// console.log(res)
                    // }
                // })
		}
	}
</script>


<style lang="less">
	* { padding: 0; margin: 0; }

	.home {
		font-size: 16px;
		line-height: 1em;
		text-align: center;
	}
</style>
