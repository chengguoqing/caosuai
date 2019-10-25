<template>
	<view class=""> 
		  <video id="myVideo" src="http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4" @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
	</view>
	
</template>
<script> 
	export default {
		props: {
			item: '',
			iddxs: ''
		},
		data() {
			return {
				autoplay: false,
				videoContext:""
			}
		},
		components: {},
		methods: {},
		mounted() {
			
			setTimeout(() => {
			   if (this.item.idx == this.iddxs) {
				   console.log(uni.createVideoContext('myVideo'))
					uni.createVideoContext('myVideo').play()
			   	
			   } else {
				 
			   	// this.videoContext.pause()
			   }
			}, 200);
		},
		watch: {
			
		}
	}
</script>
<style>
	.video {
		flex: 1;
		height: 100%;
		/* #ifndef APP-PLUS */
		width: 100%;
		/* #endif */
	}
</style>
