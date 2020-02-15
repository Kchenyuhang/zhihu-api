<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
	name: 'about',
	data() {
		return {
		};
	},
	mounted() {
	},
	created() {
		this.axios
			.get('https://www.zhihu.com/api/v3/feed/topstory/recommend?session_token=2a5c97cdbe01e54c45555fa98664b0f5&desktop=true&page_number=3&limit=6&action=down&after_id=11')
			.then(res => {
				console.log(res);
			});
	}
};
</script>
