<script lang="ts">
	import Edelweiss from '$lib/atoms/Edelweiss.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}
<Edelweiss />

<style>
</style>
