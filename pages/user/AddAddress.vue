<template>
	<view class="pt20">

		<van-cell-group>
			<van-field label="收货人" placeholder="请填写收货人姓名" clearable />
			<van-field label="手机号码" type="number" placeholder="请填写收货人手机号码" clearable />
			<van-cell title="所在地区" :value="dizhisd||'请选择所在地区'" is-link @tap="$refs.ssd_eert.open()" class="dfdsf_deertr"></van-cell>
			<van-field label="详细地址" placeholder="请输入详细地址" type="textarea" rows="4" clearable autosize class="duosddrr" />
			<van-cell title="设为默认地址">
				<switch checked color="#FFC120" />
			</van-cell>
		</van-cell-group>
		<view class="pd bssderrtx">
			<van-button type="primary" @tap="ht">保存</van-button>
		</view>
		<dxpup ref="ssd_eert">
			<view class="fz32 z3 pt20 pd pm20">
				配送至
			</view>
			<view class="pr dsfds_deerrtty">
				<dxarea @closew="closew" ></dxarea>
			</view>
		</dxpup>
	</view>
</template>
<script>
	import dxarea from "@/components/dxarea"
	import dxpup from "@/components/dxpup"
	export default {
		data() {
			return {
				checked: true,
				showes: false,
				showCs: false,
				dizhisd: ""
			}
		},
		components: {
			dxarea,
			dxpup
		},
		methods: {
			closew(e) {
				this.dizhisd = e[0].name + e[1].name + e[2].name
				this.showes = false
				this.$refs.ssd_eert.close()
			}
		},
		mounted() {}
	}
</script>
<style>
	.duosddrr .van-field__input {
		height: 200upx !important;
		line-height: 1.4;
	}
	.dfdsf_deertr .van-cell__title{
		flex: none;
		width: 185upx;
	}
	.dfdsf_deertr .van-cell__value{
		text-align: left !important; 
	}
</style>
<style scoped>

</style>
