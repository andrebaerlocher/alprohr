<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div id="huettenbild" class="wide" class:huettenMobile={responsive.isMobile}>
	<h1>Hüttenzauber & Genuss</h1>
	<h2>mit Respekt für die Natur</h2>
	<div class="empty"></div>
</div>

<style>
	#huettenbild {
		min-height: 50dvh;
		color: black;
		display: grid;
		grid-template-rows: 35dvh auto 1fr;
	}

	.huettenMobile {
		box-sizing: border-box;
		margin-left: 0px;
	}

	h1 {
		text-align: center;
		align-self: end;
		line-height: 1;
	}

	h2 {
		text-align: center;
		margin-top: -1rem;
		line-height: 1;
	}

	.empty {
		content: '';
	}
</style>
