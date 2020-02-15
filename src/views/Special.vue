<template>
	<div>
		<div class="banner">
			<svg class="logo" viewBox="0 0 24 24" width="32" height="32">
				<path
					d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
					fill-rule="evenodd"
				></path>
			</svg>
			<p class="page-title">全部专题</p>
			<p class="page-count">共有{{ specials.length }}个专题</p>
		</div>
		<div class="wrapper" ref="wrapper">
			<ul class="content">
				<li class="row" v-for="(item, index) in specials" :key="index">
					<div class="col-4"><img :src="item.banner" alt="" /></div>
					<div class="col-8">
						<button class="btn-follow">关注专题</button>
						<p class="title">{{ item.title }}</p>
						<p class="meta">{{ item.updated }}更新, {{ item.viewCount }}次浏览</p>
						<p class="introduction">{{ item.introduction }}</p>
						<span v-for="(section, index) in item.sections" :key="index" class="section" v-if="index < 4">{{ section.sectionTitle }}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'special',
	data() {
		return {
			specials: []
		};
	},
	mounted() {
		this.$nextTick(() => {
			this.scroll = new Bscroll(this.$refs.wrapper, {});
		});
	},
	created() {
		this.axios
			.get(this.$store.state.baseUrl + '/special/list', {
				params: {
					offset: 0,
					limit: 100
				}
			})
			.then(res => {
				console.log(res);
				this.specials = res.data.data;
			});
	}
};
</script>
<style lang="scss" scoped>
.container {
	margin-top: -10px;
}
.banner {
	width: 100%;
	margin-bottom: 10px;
	height: 90px;
	background-color: #fff;
	box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
	padding-left: 10%;
	display: flex;
	align-items: center;
	.logo {
		fill: #0084ff;
		margin-right: 15px;
	}
	.page-title {
		font-size: 25px;
		font-weight: 600;
		margin-right: 15px;
	}
	.page-count {
		font-size: 15px;
		color: #8590a6;
	}
}

.wrapper {
	width: 80%;
	margin: 0 auto;
	.row {
		display: flex;
		margin-bottom: 10px;
		border: 1px solid #d6d6d6;
		border-radius: 4px;
		height: 200px;
		padding: 20px;
		box-sizing: border-box;
		box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
		.col-4 {
			flex: 0 0 33%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}
		.col-8 {
			position: relative;
			flex: 0 0 66%;
			text-align: left;
			line-height: 28px;
			padding-left: 15px;
			.btn-follow {
				position: absolute;
				top: -5px;
				right: 10px;
				border: none;
				outline: none;
				flex-shrink: 0;
				margin-left: 20px;
				width: 88px;
				height: 34px;
				background-color: rgba(0, 132, 255, 0.08);
				font-size: 14px;
				color: #0084ff;
				border-radius: 3px;
				font-weight: 600;
			}
			h3 {
				font-weight: 700;
			}
			.meta {
				font-size: 13px;
				color: #99a6c4;
			}
			.introduction {
				font-size: 15px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.section {
				background-color: #eee;
				padding: 3px;
				margin-right: 5px;
				font-size: 13px;
				color: #9091a7;
			}
		}
	}
}
.title {
	font-size: 20px;
	font-weight: 600;
	margin-right: 15px;
}
</style>
