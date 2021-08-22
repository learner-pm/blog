<template>
	<div>
		<div v-for="item in list" :key="item.id" class="myContent">
			<router-link :to="item.url" tag="div">{{ item.content }}</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{ id: 0, content: "js基础内容", url: "/frontEnd/ecmascript/" },
					{ id: 1, content: "html/css实际", url: "/frontEnd/html/" },
					{ id: 2, content: "浏览器知识", url: "/frontEnd/other/" },
				],
			};
		},
	};
</script>

<style scoped>
.myContent div:hover {
	cursor: pointer;
	box-shadow: 0 0 8px #42b983b3;
}
.myContent:nth-child(n) {
	background-color: #42b983b3;
}
.myContent:nth-child(2n) {
	background-color: #42b98340;
}
.myContent div {
	padding: 10px 16px;
	margin: 16px 0;
	font-size: 16px;
}
span {
	color: black;
}
</style>