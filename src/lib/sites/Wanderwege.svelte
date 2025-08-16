<script lang="ts">
	import Brülisau from '$lib/images/BruelisauHoherKastenAlpRohr.png';
	import BrülisauAlpRohr from '$lib/images/BruelisauAlpRohr.png';
	import Saxerlücke from '$lib/images/BruelisauSaemtiserseeFaelenseeSaxerlueckeAlpRohr.png';
	import SennwaldBrülisau from '$lib/images/SennwaldBruelisau.png';
	import SennwaldAlpRohr from '$lib/images/SennwaldAlpRohr.png';
	import Sennwald from '$lib/images/Sennwald.png';

	import { responsive } from '$lib/aux/Responsive.svelte';
	import Wandercard from '$lib/organism/Wandercard.svelte';
</script>

<div id="wanderwege" class="g10">
	<h1 class="full">Wanderwege zum Alp Rohr</h1>
	<h3 class="full raleway after-xl">
		Entdecke die schönsten Wanderwege zur Alp Rohr und erlebe die unberührte Natur des Alpsteins. Ob
		über sanfte Wiesen, schattige Wälder oder steilere Pfade – jeder Weg bietet einzigartige
		Ausblicke und ein unvergleichliches Naturerlebnis. Die Alp Rohr ist nicht nur ein Ziel, sondern
		auch ein Höhepunkt jeder Wanderung. Die Alp Rohr liegt genau auf halbem Weg zwischen dem
		Rheintal und dem Hohen Kasten und eignet sich perfekt für eine kleine Rast.
		{responsive.isSafari}
	</h3>
</div>
<div class="cards g10m" class:safari={responsive.isSafari} class:notmobile={!responsive.isMobile}>
	<Wandercard
		left={false}
		titel={'Brülisau AI - Hoher Kasten - Alp Rohr'}
		img={Brülisau}
		text="Starte deine Tour in Brülisau AI und geniesse eine bequeme Auffahrt mit der Seilbahn auf den Hohen Kasten. Oben angekommen erwartet dich ein beeindruckendes 360°-Panorama über das Rheintal, den Alpstein und die umliegenden Alpen. Von hier aus führt ein malerischer Wanderweg bergab zur Alp Rohr. Der Pfad verläuft durch die einzigartige Landschaft des Alpsteins und bietet unvergessliche Ausblicke."
	/>
	<Wandercard
		left={false}
		titel={'Brülisau AI - Kastensattel - Baritsch - Alp Rohr'}
		img={BrülisauAlpRohr}
		text="Starte in Brülisau und wandere über Ruhesitz und Neuhütten zum Kantensattel. Der anspruchsvolle, aber gut begehbare Weg bietet beeindruckende Ausblicke. Vom Kantensattel geht es weiter durch idyllische Alpwiesen Richtung Baritsch, bevor der Abstieg in Serpentinen zur Alp Rohr führt. Ein abwechslungsreicher Weg mit herrlichen Panoramen!"
	/>
	<Wandercard
		left
		titel={'Tagestour Brülisau AI - Sämtisersee - Fählensee - Saxerlücke - Alp Rohr'}
		img={Saxerlücke}
		text="Starte in Brülisau und wandere durch das malerische Brüeltobel zum Plattenbödeli. Von dort führt der Weg entlang des idyllischen Sämtisersees zum Berggasthaus Bollenwees am Fählensee. Der Aufstieg zur Saxerlücke belohnt mit beeindruckenden Ausblicken. Anschliessend geht es über Baritsch hinab zur gemütlichen Alp Rohr, die zur Einkehr einlädt. Eine abwechslungsreiche Route mit abwechslabwechslungsreichen Ausblicken!"
	/>
	<Wandercard
		left={false}
		titel={'Sennwald SG – Alp Rohr – Hoher Kasten – Brülisau AI'}
		img={SennwaldBrülisau}
		text="Starten Sie in Sennwald und wandern Sie hinauf zur Alp Rohr. Nach einer erholsamen Pause geht es weiter zum Hohen Kasten, wo Sie ein beeindruckendes Panorama erwartet. Der Abstieg führt über gut markierte Wege oder mit der Seilbahn hinunter nach Brülisau. Eine eindrucksvolle Tour, die alpinen Genuss und weite Ausblicke kombiniert!"
	/>
	<Wandercard
		left
		titel={'Sennwald SG – Parkplatz Schwendi – Alp Rohr'}
		img={Sennwald}
		text="Fahren Sie von Sennwald zum Parkplatz Schwendi (begrenzte Parkmöglichkeiten). Von dort aus erreichen Sie die Alp Rohr nach einem etwa 1-stündigen Fussmarsch. Der Weg führt durch idyllische Natur und bietet wunderschöne Ausblicke – ideal für eine kurze, aber lohnende Wanderung!"
	/>
	<Wandercard
		left={false}
		titel={'Sennwald SG – Alp Rohr'}
		img={SennwaldAlpRohr}
		text="Starten Sie direkt im Dorf Sennwald und wandern Sie etwa 2 Stunden durch abwechslungsreiche Landschaften hinauf zur Alp Rohr. Der Weg führt durch Wälder und Wiesen, begleitet von herrlichen Ausblicken ins Rheintal – ein perfekter Einstieg in die Bergwelt!"
	/>
</div>

<style>
	#wanderwege {
		margin-bottom: 60px;
	}

	.cards {
		align-items: start;
	}

	h3 {
		font-weight: 500;
		line-height: 1.2;
		letter-spacing: 4%;
		font-size: clamp(1rem, 2.1vw, 32px);
	}

	.notmobile {
		columns: 2;
	}

	.safari {
		display: flex;
		flex-flow: column nowrap;
	}
</style>
