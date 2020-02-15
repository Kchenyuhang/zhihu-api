<template>
	<div class="container fill-white border tiny-round">
		<div class="d-flex justify-content-between p-2 m-2 border-bottom">
			<h4>圆桌</h4>
			<p class="blue strong link">举办圆桌</p>
		</div>
		<div class="d-flex flex-wrap pl-5 pt-3">
			<div class="col-3 mb-3" v-for="(item, index) in roundTables" :key="index">
				<div class="mask"></div>
				<img :src="item.logo" />
				<p class="name pl-1">{{ item.name }}</p>
				<p class="meta">该圆桌被浏览{{ item.visitsCount }}次</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'follow',
	data() {
		return {
			roundTables: []
		};
	},
	created() {
		this.axios
			.get(this.$store.state.baseUrl + '/roundtable/list', {
				params: {
					offset: 0,
					limit: 200
				}
			})
			.then(res => {
				console.log(res);
				this.roundTables = res.data.data;
			});
	}
};
</script>
<style lang="scss" scoped>
.container {
	.d-flex {
		.col-3 {
			position: relative;
			width: 200px;
			height: 230px;
			.mask {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 30px;
				width: 200px;
				height: 200px;
				border-radius: 3px;
				box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
				background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
				z-index: 5;
			}
			.name {
				position: absolute;
				font-size: 15px;
				color: #fff;
				bottom: 45px;
				z-index: 10;
			}
			img {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 30px;
				width: 200px;
				height: 200px;
				border-radius: 5px;
			}
			.meta {
				position: absolute;
				bottom: 0;
				font-size: 15px;
				color: #8590a6;
			}
		}
	}
}
</style>
