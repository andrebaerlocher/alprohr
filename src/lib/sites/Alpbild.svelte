<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div id="alpbild" class="g10" class:mobile={responsive.isMobile}>
	<div class="alpcard g3">
		<h2>Hüttenzauber</h2>
		<div class="unter">Gemütliche Gaststube und sonnige Terrasse</div>
	</div>
	<div class="alpcard g4">
		<h2>Gaumenfreuden</h2>
		<div class="unter">Herzhafte Klassiker und frische Köstlichkeiten</div>
	</div>
	<div class="alpcard g3">
		<h2>24 Betten</h2>
		<div class="unter">Für Gruppen und Einzelpersonen</div>
	</div>
</div>

<style>
	.alpcard {
		display: grid;
		grid-template-rows: auto 1fr;
		overflow: clip;
		align-self: center;
		color: black;
	}

	.mobile {
		grid-template-columns: 1fr;
		padding: 0px;
		grid-column: 1 / -1;
		height: auto;
		gap: 0.5rem;
		grid-template-rows: auto auto;
	}

	.mobile > * {
		width: 100%;
		padding-left: 2rem;
		padding-right: 2rem;
		box-sizing: border-box;
		height: auto;
	}
</style>
