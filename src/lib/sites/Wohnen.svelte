<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
	import Betten from '$lib/images/Betten.jpg';
	import Crocs from '$lib/images/Crocs.jpg';
	import Schlafs from '$lib/images/Schlafs.jpg';
	import Signet from '$lib/images/Signet.png';
</script>

<div id="wohnen" class="g10m" class:wohnMobile={responsive.isMobile}>
	<div class="wohncard" class:cardMobile={responsive.isMobile}>
		<h3 class:h3isMobile={responsive.isMobile}>Für Gruppen und Einzelpersonen</h3>
		<img src={Betten} alt="Bild" style:max-height="324px" />
		<div class="text">
			Unsere Zimmer werden gerne von Gruppen belegt. Sollte eine Gruppe weniger als 4 Personen
			umfassen, können weitere Gäste mit in die Zimmer gebucht werden.
		</div>
	</div>
	<div class="wohncard" class:cardMobile={responsive.isMobile}>
		<h3 class:h3isMobile={responsive.isMobile}>Hüttenschlafsäcke - Nachhaltig und praktisch</h3>
		<img src={Schlafs} alt="Bild" />
		<div class="text">
			Aus Rücksicht auf unsere Ressourcen und die abgelegene Lage ist ein Hüttenschlafsack
			obligatorisch. Falls Du keinen dabei hast, kannst Du bei uns einen Schlafsack für nur 5.00 Fr.
			mieten.
		</div>
	</div>
	<div class="wohncard" class:cardMobile={responsive.isMobile}>
		<h3 class:h3isMobile={responsive.isMobile}>Duschen und Hausschuhe</h3>
		<img src={Crocs} alt="Bild" />
		<div class="text">
			<div class="text after-md">
				Moderne Waschräume und WC befinden sich im Untergeschoss. Für eine erfrischende Dusche
				kannst Du beim Personal Jetons zu je 5.00 Fr. erwerben.
			</div>
			<div class="text after-md">Bitte ein Handtuch mitbringen.</div>
			<div class="text">
				Hausschuhe stehen ausreichend zur Verfügung, da das Betreten der Schlafräume mit
				Strassenschuhen nicht gestattet ist.
			</div>
		</div>
	</div>
	<div class="wohncard" class:cardMobile={responsive.isMobile}>
		<h3 class:h3isMobile={responsive.isMobile}>Preise pro Nacht</h3>
		<img class="sig" src={Signet} alt="Bild" style:opacity="80%" />
		<div class="text">
			<ul>
				<li>Erwachsene ab 16 Jahren: 65.00 Fr.</li>
				<li>Von 5 bis 15 Jahren: 35.00 Fr.</li>
				<li>Kinder bis 5 Jahre: gratis</li>
			</ul>
			<span style:font-size="0.75rem">
				Das Frühstück ist bereits im Übernachtungspreis inbegriffen.
			</span>
			<br />
			<span style:font-size="1rem">
				Weitere Informationen finden Sie in den <a href="/AGB.pdf">AGB</a>.
			</span>
		</div>
	</div>
</div>

<style>
	#wohnen {
		display: flex;
		flex-flow: column nowrap;
		gap: 36px;
		margin-bottom: 24px;
	}

	.wohnMobile {
		grid-column: 1 / -1;

		box-sizing: border-box;
	}

	.wohncard {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		grid-template-areas: 'bild titel' 'bild text';
		column-gap: 24px;
	}

	.cardMobile {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
		grid-template-areas: 'titel' 'bild' 'text';
		column-gap: 0px;
		padding: 2rem;
		box-sizing: border-box;
		width: 100dvw;
		row-gap: 1rem;
	}

	h3 {
		grid-area: titel;
		margin-top: 0px;
	}

	.h3isMobile {
		margin-bottom: -20px;
	}

	.text {
		grid-area: text;
	}

	ul {
		grid-area: text;
	}

	img {
		grid-area: bild;
		width: 100%;
		object-fit: cover;
		object-position: center;
		justify-self: center;
		align-self: start;
	}

	.sig {
		width: 75%;
		object-fit: cover;
		object-position: center;
		justify-self: center;
		align-self: start;
	}

	.cardMobile > img {
		margin-left: 0px;
		max-width: calc(100dvw - 4rem);
		box-sizing: border-box;
		border-radius: 0.5rem;
	}
</style>
