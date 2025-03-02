<script lang="ts">
	import Edelweiss from '$lib/atoms/Edelweiss.svelte';
	import { responsive } from '$lib/aux/Responsive.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:window bind:innerWidth={responsive.winWidth} />
{@render children()}
<Edelweiss />

<style>
</style>
