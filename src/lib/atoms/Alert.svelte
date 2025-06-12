<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';

	let {
		left = false,
		text,
		visible = true
	}: { left?: boolean; text: string; visible?: boolean } = $props();

	import { blur } from 'svelte/transition';
</script>

{#if visible}
	<button onclick={() => (visible = false)}>
		<div
			transition:blur={{ duration: 300 }}
			class="modal"
			class:modile={responsive.isMobile}
			class:left
		>
			<h2 style:text-align="center">{text}</h2>
		</div>
	</button>
{/if}

<style>
	button {
		all: unset;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100dvw;
		height: 100dvh;
		z-index: 1000;
		padding: 0.5rem;
		border: none;
		cursor: pointer;
		backdrop-filter: blur(20px);
		display: grid;
		place-items: center;
	}
	.modal {
		min-width: 70dvw;
		white-space: pre-line;
		word-break: break-word;
		text-wrap: balance;
		max-width: 90dvw;
		background-color: color-mix(in oklch, white 50%, red 30%);
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
		text-align: left;
	}

	.modile {
		left: 0dvw;
		top: 0dvh;
		width: 90dvw;
	}
</style>
