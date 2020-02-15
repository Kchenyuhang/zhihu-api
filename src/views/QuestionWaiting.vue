<template>
	<div class="container">
		<!-- 默认导航的切换动画 -->
		<transition name="fade">
			<!-- 默认导航 -->
			<div class="bar" v-if="fixed"><h3>主导航</h3></div>
		</transition>

		<transition name="fade">
			<!-- 隐藏的替换导航 -->
			<div class="hide-bar" v-if="!fixed"><h3>次导航</h3></div>
		</transition>

		<!-- 列表内容，用来滚动 -->
		<div class="list-item" v-for="(item, index) in items" :key="index">{{ item }}</div>
	</div>
</template>

<script>
export default {
	name: 'waiting',
	data() {
		return {
			fixed: true,
			items: [],
			position: 0
		};
	},
	mounted() {
		// 等到页面产生滚动,执行onscroll()函数，监听滚动条位置变化
		this.$nextTick(function() {
			window.addEventListener('scroll', this.onScroll);
		});
	},
	created() {
		for (let i = 0; i < 30; i++) {
			this.items.push('item' + i);
		}
	},
	methods: {
		onScroll() {
			//取得滚动的起点，也就是文档流的顶部
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			this.position = scrollTop;
			console.log(this.position);
			//100的位置，fix变化
			this.fixed = scrollTop <= 150;
		}
	}
};
</script>
<style lang="scss" scoped>
.container {
	width: 80%;
	margin: 0 auto;
}
.bar,
.hide-bar {
	position: fixed;
	top: 60px;
	left: 0;
	right: 0;
	margin-bottom: 55px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
}
.bar {
	background-color: #87caca;
}

.hide-bar {
	background-color: #8b8bd0;
}
.list-item {
	width: 80%;
	margin: 0 auto;
	height: 50px;
	margin-top: 5px;
	border-radius: 5px;
	background-color: #ccc;
}

.fade-enter-active {
	transition: all 0.3s ease-in;
}
.fade-leave-active {
	transition: all 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
	transform: translateY(-50px);
	opacity: 0;
}
</style>
