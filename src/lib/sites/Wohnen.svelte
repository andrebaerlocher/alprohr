<script lang="ts">
	import Betten from '$lib/images/Betten.jpg';
	import Crocs from '$lib/images/Crocs.jpg';
	import Schlaf from '$lib/images/Schlaf.png';
	import Signet from '$lib/images/Signet.png';
</script>

<div id="wohnen" class="g10m">
	<div class="wohncard">
		<h3>Für Gruppen und Einzelpersonen</h3>
		<img src={Betten} alt="Bild" style:max-height="324px" />
		<div class="text">
			Unsere Zimmer werden gerne von Gruppen belegt. Sollte eine Gruppe weniger als 4 Personen
			umfassen, können weitere Gäste mit in die Zimmer gebucht werden.
		</div>
	</div>
	<div class="wohncard">
		<h3>Hüttenschlafsäcke - Nachhaltig und praktisch</h3>
		<img src={Schlaf} alt="Bild" />
		<div class="text">
			Aus Rücksicht auf unsere Ressourcen und die abgelegene Lage ist ein Hüttenschlafsack
			obligatorisch. Falls Du keinen dabei hast, kannst Du bei uns einen Schlafsack für nur 5.00 Fr.
			mieten.
		</div>
	</div>
	<div class="wohncard">
		<h3>Duschen und Hausschuhe</h3>
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
	<div class="wohncard">
		<h3>Preise pro Nacht</h3>
		<img src={Signet} alt="Bild" style:opacity="80%" />
		<ul>
			<li>Erwachsene ab 16 Jahren: 65.00 Fr.</li>
			<li>Von 5 bis 15 Jahren: 35.00 Fr.</li>
			<li>Kinder bis 5 Jahre: gratis</li>
		</ul>
	</div>
</div>

<style>
	#wohnen {
		display: flex;
		flex-flow: column nowrap;
	}

	.wohncard {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		grid-template-areas: 'bild titel' 'bild text';
		column-gap: 24px;
		margin-bottom: 24px;
	}

	h3 {
		grid-area: titel;
	}

	.text {
		grid-column: 2;
	}

	ul {
		grid-column: 2;
	}

	img {
		grid-area: bild;
		width: 355px;
		max-height: 355px;
		object-fit: cover;
		object-position: center;
		margin-left: 60px;
		margin-top: 30px;
	}
</style>
