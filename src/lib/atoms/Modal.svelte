<script lang="ts">
	let {
		left = false,
		text,
		visible
	}: { left?: boolean; text: string; visible: boolean } = $props();

	import { blur } from 'svelte/transition';
</script>

{#if visible}
	<div transition:blur={{ duration: 300 }} class="modal" class:left>{text}</div>
{/if}

<style>
	.modal {
		position: absolute;
		width: 40dvw;
		right: -35dvw;
		backdrop-filter: blur(25px) brightness(1.2);
		border-radius: 1rem;
		border: 1px solid white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		z-index: 1000;
		box-sizing: border-box;
		padding: 1rem;
		font-size: clamp(1rem, 1.95dvw, 1.5rem);
		font-weight: 500;
		hyphens: auto;
		display: grid;
		place-items: center;
	}

	.left {
		left: -43dvw;
	}
</style>
