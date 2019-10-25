<template>
	<view>
		<van-search placeholder="请输入搜索关键词" use-action-slot @search="onSearch">
			<view slot="action" class="ye" @tap="onSearch">搜索</view>
		</van-search>
		<view class="pd mt20 dx_row">
			<view class="dx_col fz30 z3">
				历史搜索
			</view>
			<view class="dx_col tr" >
				<van-icon name="delete" class="z9 fz36" @tap="is_qing=false"/>
			</view>
		</view>
		<view class="pd" v-if="is_qing">
			<view class="ssd_jhj_dertx">
				鞋子
			</view>
		</view>
		
		<view class="pd  dx_row">
			<view class="dx_col fz30 z3">
				大家都在搜
			</view>
			
		</view>
		<view class="pd">
			<view class="ssd_jhj_dertx" v-for="sd in 20">
				鞋子
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				is_qing:true // 是否显示历史搜索
			}
		},
		components: {

		},
		methods: {
			onSearch() {
				console.log(222)
				this.hf('/pages/index/searchResult')
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.ssd_jhj_dertx{
		background: #EBEBEB;
		color: #333;
		border-radius: 40upx;
		padding: 0upx 30upx;
		display: inline-block;
		font-size: 28upx;
		margin-right: 20upx;
		margin-bottom: 20upx;
	}
</style>
