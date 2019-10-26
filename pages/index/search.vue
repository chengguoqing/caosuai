<template>
	<view>
		
		<van-search
		  v-model="dsfdsfeer"
		  placeholder="请输入搜索关键词"
		  show-action
		  shape="round"
		  @search="onSearch"
		>
		  <div slot="action" @click="onSearch">搜索</div>
		</van-search>
		
		
		<view class="pd mt20 dx_row">
			<view class="dx_col fz30 z3">
				历史搜索
			</view>
			<view class="dx_col tr" >
				<van-icon name="delete" class="z9 fz36" @tap="qingxceert"/>
			</view>
		</view>
		<view class="pd" v-if="is_qing">
			<view class="ssd_jhj_dertx" v-for="sd in lishd">
				{{sd}}
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				dsfdsfeer:"",
				lishd :[],
				is_qing:true // 是否显示历史搜索
			}
		},
		components: {

		},
		methods: {
			onSearch() {
				if(!this.dsfdsfeer){
					uni.showToast({
						title:'请输入搜索标题',
						icon:"none"
					})
					return
				}
				let eeerxe = []
				try{
					eeerxe=JSON.parse(localStorage.lishi)
				}catch(e){
					
				}
				eeerxe.push(this.dsfdsfeer)
				localStorage.lishi = JSON.stringify(eeerxe)
				this.lishd = eeerxe
				this.hf('/pages/fenlei/shangping?sousou='+this.dsfdsfeer)
			},
			qingxceert (){
				localStorage.lishi=""
				this.lishd = []
			}
		},
		mounted() {
			try{
				this.lishd = JSON.parse(localStorage.lishi)
			}catch(e){
				
			}
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
	.dsfdsfdsde{
		background: red;
		width: 100upx;
		height: 100upx;
	}
</style>
