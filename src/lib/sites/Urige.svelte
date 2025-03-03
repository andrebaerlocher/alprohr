<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div id="uebernachten" class="wide" class:urigMobile={responsive.isMobile}>
	<h1>Urige Nächte auf der Alp</h1>
	<h2>Einfach, gemütlich, echt -</h2>
	<h2>Übernachten in der Bergidylle</h2>
	<div class="empty"></div>
</div>

<style>
	#uebernachten {
		min-height: 50dvh;
		display: grid;
		justify-items: center;
		grid-template-rows: 25dvh auto auto 1fr;
		color: white;
	}

	.urigMobile {
		margin-left: 0px;
		grid-template-rows: auto auto auto 1fr;
		padding: 2rem;
		box-sizing: border-box;
	}

	h1 {
		align-self: end;
	}

	h2 {
		margin-bottom: 0px;
		margin-top: 0px;
		line-height: 1.44;
	}
</style>
