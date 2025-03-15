<script lang="ts">
	import Edelweiss from '$lib/atoms/Edelweiss.svelte';
	import { responsive } from '$lib/aux/Responsive.svelte';

	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let main = $state<HTMLDivElement | null>(null);

	$effect(() => {
		if (!main) return;

		const handleScroll = () => {
			// Use requestAnimationFrame for better performance
			requestAnimationFrame(() => {
				responsive.scrollPos = main!.scrollTop;
			});
		};

		main.addEventListener('scroll', handleScroll, { passive: true });

		// Clean up the event listener when the component is destroyed
		return () => {
			main?.removeEventListener('scroll', handleScroll);
		};
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
		overflow: clip;
		box-sizing: border-box;
	}

	.main {
		grid-column: 1 / -1;
		overflow: auto;
		grid-row: 1;
		box-sizing: border-box;
	}

	.right {
		grid-column: 3;
		grid-row: 1;
		overflow: clip;
		box-sizing: border-box;
	}
</style>
