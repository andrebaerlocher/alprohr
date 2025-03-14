<script lang="ts">
	import Edelweiss from '$lib/atoms/Edelweiss.svelte';
	import { responsive } from '$lib/aux/Responsive.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let main = $state<HTMLDivElement | null>(null);

	$effect(() => {
		if (main) {
			main.addEventListener('scroll', () => {
				responsive.scrollPos = main!.scrollTop;
			});
		}
	});
</script>

<svelte:window bind:innerHeight={responsive.winHeight} bind:innerWidth={responsive.winWidth} />
<div class="wrap">
	<div class="main" bind:this={main}>
		{@render children()}
	</div>
	<div class="right">
		<Edelweiss />
	</div>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: 60px 1fr 60px;
		height: 100dvh;
		width: 100dvw;
	}

	.main {
		grid-column: 1 / -1;
		overflow: auto;
		grid-row: 1;
	}

	.right {
		grid-column: 3;
		grid-row: 1;
		overflow: hidden;
	}
</style>
