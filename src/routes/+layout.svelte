<script lang="ts">
	import Edelweiss from '$lib/atoms/Edelweiss.svelte';
	import { responsive } from '$lib/aux/Responsive.svelte';
	import Sidebar from '$lib/organism/Sidebar.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:window
	bind:innerHeight={responsive.winHeight}
	bind:innerWidth={responsive.winWidth}
	bind:scrollY={responsive.scrollPos}
/>
{@render children()}
<!-- <Edelweiss />
<div class="stick">
	<Sidebar />
</div>

<style>
	.stick {
		position: absolute;
		top: 50dvh;
	}
</style> -->
