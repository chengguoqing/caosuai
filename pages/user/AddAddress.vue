<template>
	<view class="pt20">

		<van-cell-group>
			<van-field label="收货人" placeholder="请填写收货人姓名" clearable v-model="form.user_name" />
			<van-field label="手机号码" type="number" placeholder="请填写收货人手机号码" clearable v-model="form.user_phone" />
			<van-cell title="所在地区" :value="form.ssq||'请选择所在地区'" is-link @tap="$refs.ssd_eert.open()" class="dfdsf_deertr"></van-cell>
			<van-field label="详细地址" placeholder="请输入详细地址" type="textarea" rows="4" clearable autosize class="duosddrr" v-model="form.xxdz" />
			<van-cell title="设为默认地址">
				<switch :checked="form.morens" color="#FFC120" @change="biandser" />
			</van-cell>
		</van-cell-group>
		<view class="pd bssderrtx">
			<van-button type="primary" @tap="baocun">保存</van-button>
		</view>
		<dxpup ref="ssd_eert">
			<view class="fz32 z3 pt20 pd pm20">
				配送至
			</view>
			<view class="pr dsfds_deerrtty">
				<dxarea @closew="closew"></dxarea>
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
				showes: false,
				showCs: false,
				dizhisd: "",
				isbianji:false,//是否为编辑
				form: {
					user_name: "",
					user_phone: "",
					ssq: "",
					xxdz: "",
					morens: true
				}
			}
		},
		components: {
			dxarea,
			dxpup
		},
		methods: {
			biandser(e) {
				this.form.morens = e.detail.value
			},
			closew(e) {
				this.form.ssq = e[0].name + e[1].name + e[2].name
				this.showes = false
				this.$refs.ssd_eert.close()
			},
			async getdizs(id){
				this.form = await this.post("csscs/getdizidange", {id:id})
				
			},
			async baocun() {
				if (!this.form.user_name) {
					uni.showToast({
						title: "请输入收货人",
						icon: "none"
					})
					return
				}
				if (!this.form.user_phone) {
					uni.showToast({
						title: "请输入手机号码",
						icon: "none"
					})
					return
				}
				if (!this.yanza.phone(this.form.user_phone)) {
					uni.showToast({
						title: "手机号码输入错误",
						icon: "none"
					})
					return
				}
				if (!this.form.ssq) {
					uni.showToast({
						title: "请选择所在地区",
						icon: "none"
					})
					return
				}
				if (!this.form.xxdz) {
					uni.showToast({
						title: "请输入详细地址",
						icon: "none"
					})
					return
				}
				let ssder = "csscs/adddizi"
				if(this.isbianji){
					ssder = "csscs/xiugaidizi"
				}
				await this.post(ssder, this.form)
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onLoad(e) {
			if (e.id) {
				this.getdizs(e.id)
				this.isbianji = true
			}
		}
	}
</script>
<style>
	.duosddrr .van-field__input {
		height: 200upx !important;
		line-height: 1.4;
	}

	.dfdsf_deertr .van-cell__title {
		flex: none;
		width: 185upx;
	}

	.dfdsf_deertr .van-cell__value {
		text-align: left !important;
	}
</style>
<style scoped>

</style>
