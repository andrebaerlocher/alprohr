<script>
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div class="g10 bento" class:bentmobile={responsive.isMobile}>
	<img class="grosslinks" src="/images/BOOben.jpg" alt="Bild" />
	<img style:grid-area="b2" src="/images/Innen.jpg" alt="Bild" style:height="232px" />

	<div class="text rechts5">
		Die Alp Rohr ist bequem über eine Forststrasse erreichbar, die bis zum Parkplatz Schwendi mit
		dem Auto befahren werden kann. Die Forststrasse zur Alp Rohr ist für den öffentlichen Verkehr
		gesperrt. Aber von dort führt ein malerischer Fussweg in etwa 45 bis 60 Minuten zum Alp Rohr.
		Auf 1.215 m Höhe, in der Gemeinde Sennwald im Kanton Sankt Gallen, liegt unser Bergrestaurant
		Alp Rohr. Umgeben von einer beeindruckenden Berglandschaft erwartet dich hier ein
		unvergesslicher Ausblick über das Rheintal – an der Schnittstelle von Schweiz, Liechtenstein und
		dem österreichischen Vorarlberg.
	</div>
	<img style:grid-area="b3" src="/images/BOTunnel.jpg" alt="Bild" style:height="232px" />

	<div class="zweibilder">
		<img src="/images/BOUntenlinks.jpg" alt="Bild" />
		<img src="/images/BOUntenrechts.jpg" alt="Bild" />
	</div>
</div>

<style>
	.text {
		padding-top: 1rem;
		grid-area: t;
		font-size: clamp(1rem, 1.95dvw, 3rem);
		hyphens: auto;
		align-self: center;
		box-sizing: border-box;
		max-height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;

		position: relative; /* creates a positioning context */
	}

	.bento {
		grid-template-rows: 232px 1fr 344px;
		grid-template-areas: 'b1 b1 b1 b1 leer b2 b2 b2 b3 b3' 'b1 b1 b1 b1 leer t t t t t' 'bs bs bs bs l t t t t t';
		gap: 24px;
		padding-top: 60px;
		padding-bottom: 60px;
		box-sizing: border-box;
		max-height: 100%;
		width: 100%;
		overflow: clip;
	}

	.zweibilder {
		display: grid;
		grid-area: bs;
		grid-template-columns: 184fr 270fr;
		column-gap: 24px;
		width: 100%;
		height: 344px;
		overflow: clip;
	}

	.zweibilder > img {
		width: 100%;
		max-height: 100%; /* Add this */
	}

	.bentmobile {
		display: flex;
		gap: 16px;
		padding: 20px 0;
		box-sizing: border-box;
		flex-flow: column nowrap;
	}

	.grosslinks {
		grid-area: b1;
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: relative;
	}
</style>
