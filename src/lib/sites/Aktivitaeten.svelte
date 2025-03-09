<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
	let { x }: { x: number } = $props();
</script>

<div class="g10 cont" style:left="{-2 * x}dvw" class:cont={responsive.isMobile}>
	<div
		class="aktivcard g3"
		style:background-image="linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/Wandern.jpg')"
	>
		<h2>Wandern</h2>
		<div class="text">Gut markierte Wanderwege mit traumhaftem Ausblick</div>
	</div>
	<div
		class="aktivcard g4"
		style:background-image="linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/Mountainbike.jpg')"
	>
		<h2>Mountainbike</h2>
		<div class="text">Geniesse den Weg zum Alp Rohr einfach mit dem Fahrrad</div>
	</div>
	<div
		class="aktivcard g3"
		style:background-image="linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/Alphuette.jpg')"
	>
		<h2>Erholung</h2>
		<div class="text">Natur, frische Luft und ein Panoramablick</div>
	</div>
</div>

<style>
	.aktivcard {
		align-self: center;
		background-size: cover;
		background-position: center;
		height: 70%;
		display: grid;
		grid-template-rows: 1fr 1fr;
		padding: 1.5rem;
		font-size: clamp(1rem, 2.9vh, 3rem);
		margin-top: -1.5rem;
	}

	h2 {
		align-self: end;
	}

	.cont {
		position: relative;
		width: 300dvw;
	}
</style>
