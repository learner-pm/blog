<template>
	<div></div>
</template>

<script>
	export default {
		mounted() {
			this.addA();
		},
		methods: {
			addA() {
				const footer = document.getElementsByClassName("footer");
				const a = document.createElement("A");
				a.href = "https://beian.miit.gov.cn/#/Integrated/index";
				a.textContent = "蜀ICP备20004855号-1";
				a.target = "_black";
				footer[0].appendChild(a);
			},
		},
	};
</script>

<style>
</style>