<template>
    <view class="ssd_deerttsee" v-if="!issder">
		<image src="/static/img/neiku.jpg" class="yj userererdert cz"></image>
		<text class="fz26 cf ml5 cz">内容内容</text>
    </view>
</template>
<script>
export default {
    data () {
        return {
			issder:false
		}
    },
    components: {},
    methods: {},
    mounted () {
		setTimeout(a=>{
			this.issder=true
		},3000)
	}
}
</script>
<style lang='scss' scoped>
	.userererdert{
		width: 45upx;
		height: 45upx;
	}
	.ssd_deerttsee{
		position: fixed;
		left: 20upx;
		top: 160upx;
		background: rgba(0,0,0,0.5);
		padding: 5upx 30upx 5upx 10upx;
		z-index: 10000;
		border-radius: 40upx;
	}
</style>
