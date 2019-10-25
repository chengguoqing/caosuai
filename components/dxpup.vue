<template>
	<view v-if="sjsh_er">
		<view class="sdfds_deerswre bgff" :style="{'bottom':ddeer+'rpx'}">
			<slot></slot>
		</view>
		<view class="adsfds_deeerert">
			
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				ddeer: -1400,
				sjsh_er: false
			}
		},
		components: {},
		methods: {
			open() {
				this.sjsh_er = true
				setTimeout(() => {
					this.ddeer = 0
				}, 200)
			},
			close (){
				this.ddeer = -1400
				setTimeout(() => {
					this.sjsh_er = false
				}, 400)
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.sdfds_deerswre {
		position: fixed;
		left: 0;
		width: 100%;
		z-index: 1000;
		transition: all .4s;
		z-index: 10000;
	}
	.adsfds_deeerert{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		z-index:9999 ;
	}
</style>
