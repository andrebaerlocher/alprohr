<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div id="schonen" class="g10" class:bentmobile={responsive.isMobile}>
	<img style:grid-area="b1" src="/images/Schon1.jpg" alt="" />
	<img style:grid-area="b2" src="/images/Schon2.jpg" alt="" />
	<div class="text">
		Auf der Alp Rohr wird Wert auf ressourcenschonendes Wirtschaften gelegt. Aufgrund der
		abgeschiedenen Lage und der geschützten Natur ist das Haus autark. Wir produzieren unseren Strom
		selber auf unserem Dach und dies ist ein rares Gut, das wir nur begrenzt zur Verfügung haben.
		Trotz der Einfachheit bietet unsere Speisekarte eine köstliche Auswahl an Gerichten, die den
		Geschmack der Alpen widerspiegeln.
	</div>
	<img style:grid-area="b3" src="/images/Schon3.jpg" alt="" />
</div>

<style>
	#schonen {
		padding-top: 60px;
		padding-bottom: 60px;
		box-sizing: border-box;
		display: grid;
		grid-template-rows: 349fr 319fr;
		gap: 24px;
		grid-template-areas: 'b1 b1 b2 b2 l t t t t t' 'b3 b3 b3 b3 l t t t t t';
	}

	.text {
		padding-top: 1rem;
		grid-area: t;
		display: grid;
		align-self: center;
		hyphens: auto;
		box-sizing: border-box;
		font-size: clamp(1rem, 1.95dvw, 3rem);
	}

	img {
		width: 100%;
		object-fit: cover;
		height: 100%;
	}
	.bentmobile {
		display: flex !important;
		gap: 16px;
		padding: 20px 0;
		box-sizing: border-box;
		flex-flow: column nowrap;
	}
</style>
