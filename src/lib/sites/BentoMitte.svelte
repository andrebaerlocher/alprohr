<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div id="bentomitte" class="g10" class:bentmobile={responsive.isMobile}>
	<img style:grid-area="b1" src="/images/BM11.png" alt="Bild" />
	<img style:grid-area="b2" src="/images/BM2.jpg" alt="Bild" style:height="232px" />

	<div class="text links5">
		Unser Bergrestaurant Alp Rohr ist ein beliebtes Ziel für Wanderer und Mountainbiker, die hier
		eine wohlverdiente Pause einlegen. Ab der Alp startet das gut ausgeschilderte Wander-Wegenetz
		des Alpsteins, das zahlreiche Routen für Naturbegeisterte bietet. Besonders lohnenswerte
		Ausflugsziele in der Umgebung sind der Hohe Kasten oder die Alp Eidenen. Ein echtes Highlight
		ist die Übernachtung in unseren Berggasthaus Alp Rohr – ein Erlebnis, das den Tag in den Bergen
		unvergesslich macht.
	</div>
	<img style:grid-area="b3" src="/images/BM3.jpg" alt="Bild" style:height="232px" />
	<div class="zweibilder" style:height="344px">
		<img src="/images/BM4.jpg" alt="Bild" />
		<img src="/images/BM5.jpg" alt="Bild" />
	</div>
</div>

<style>
	#bentomitte {
		min-height: 100dvh;
		grid-template-rows: 232px 1fr 344px;
		grid-template-areas: 'b1 b1 b1 b2 b2 l b3 b3 b3 b3' 't t t t t l b3 b3 b3 b3' 't t t t t l bs bs bs bs';
		gap: 24px;
		padding-top: 60px;
		box-sizing: border-box;
	}

	.text {
		padding-top: 1rem;
		grid-area: t;
		font-size: clamp(1rem, 1.95dvw, 3rem);
		hyphens: auto;
		align-self: center;
	}

	.zweibilder {
		display: grid;
		grid-area: bs;
		grid-template-columns: 184fr 270fr;
		column-gap: 24px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: clip;
	}
	.bentmobile {
		display: flex;
		gap: 16px;
		padding: 20px 0;
		box-sizing: border-box;
		flex-flow: column nowrap;
	}
</style>
