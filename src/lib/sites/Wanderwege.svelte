<script lang="ts">
	import Brülisau from '$lib/images/BruelisauHoherKastenAlpRohr.png';
	import BrülisauAlpRohr from '$lib/images/BruelisauAlpRohr.png';
	import Saxerlücke from '$lib/images/BruelisauSaemtiserseeFaelenseeSaxerlueckeAlpRohr.png';
	import Tagestour from '$lib/images/Tagestour.png';
	import SennwaldBrülisau from '$lib/images/SennwaldBruelisau.png';
	import SennwaldAlpRohr from '$lib/images/SennwaldAlpRohr.png';
	import Sennwald from '$lib/images/Sennwald.png';
	import Modal from '$lib/atoms/Modal.svelte';

	let showModal = $state<number>(-1);
</script>

<div id="wanderwege" class="g10">
	<h1 class="full">Wanderwege zum Alp Rohr</h1>
	<h3 class="full raleway after-xl">
		Entdecke die schönsten Wanderwege zur Alp Rohr und erlebe die unberührte Natur des Alpsteins. Ob
		über sanfte Wiesen, schattige Wälder oder steilere Pfade – jeder Weg bietet einzigartige
		Ausblicke und ein unvergleichliches Naturerlebnis. Die Alp Rohr ist nicht nur ein Ziel, sondern
		auch ein Höhepunkt jeder Wanderung. Die Alp Rohr liegt genau auf halbem Weg zwischen dem
		Rheintal und dem Hohen Kasten und eignet sich perfekt für eine kleine Rast.
	</h3>

	<h2 onmouseenter={() => (showModal = 1)} onmouseleave={() => (showModal = -1)}>
		Brülisau AI - Hoher Kasten - Alp Rohr<Modal
			text="Starte deine Tour in Brülisau AI und geniesse eine bequeme Auffahrt mit der Seilbahn auf den Hohen Kasten. Oben angekommen erwartet dich ein beeindruckendes 360°-Panorama über das Rheintal, den Alpstein und die umliegenden Alpen. Von hier aus führt ein malerischer Wanderweg bergab zur Alp Rohr. Der Pfad verläuft durch die einzigartige Landschaft des Alpsteins und bietet unvergessliche Ausblicke."
			visible={showModal === 1}
		/>
	</h2>
	<h2 onmouseenter={() => (showModal = 2)} onmouseleave={() => (showModal = -1)}>
		Brülisau AI - Kastensattel - Baritsch - Alp Rohr
		<Modal
			text="Starte in Brülisau und wandere über Ruhesitz und Neuhütten zum Kantensattel. Der anspruchsvolle, aber gut begehbare Weg bietet beeindruckende Ausblicke. Vom Kantensattel geht es weiter durch idyllische Alpwiesen Richtung Baritsch, bevor der Abstieg in Serpentinen zur Alp Rohr führt. Ein abwechslungsreicher Weg mit herrlichen Panoramen!"
			visible={showModal === 2}
			left
		/>
	</h2>
	<img
		onmouseenter={() => (showModal = 1)}
		onmouseleave={() => (showModal = -1)}
		src={Brülisau}
		class="bild li"
		alt="Karte"
	/>
	<img
		onmouseenter={() => (showModal = 2)}
		onmouseleave={() => (showModal = -1)}
		src={BrülisauAlpRohr}
		class="bild re"
		alt="Karte"
	/>
	<h2 onmouseenter={() => (showModal = 3)} onmouseleave={() => (showModal = -1)}>
		Tagestour Brülisau AI - Sämtisersee - Fählensee - Saxerlücke - Alp Rohr
		<Modal
			text="Starte in Brülisau und wandere durch das malerische Brüeltobel zum Plattenbödeli. Von dort führt der Weg entlang des idyllischen Sämtisersees zum Berggasthaus Bollenwees am Fählensee. Der Aufstieg zur Saxerlücke belohnt mit beeindruckenden Ausblicken. Anschliessend geht es über Baritsch hinab zur gemütlichen Alp Rohr, die zur Einkehr einlädt. Eine abwechslungsreiche Route mit abwechslabwechslungsreichen Ausblicken!"
			visible={showModal === 3}
		/>
	</h2>
	<h2 onmouseenter={() => (showModal = 4)} onmouseleave={() => (showModal = -1)}>
		Halbtages Rundtour Sennwald SG - Alp Rohr - Alp Eidenen - Sennwald <Modal
			text="Diese abwechslungsreiche Rundtour startet in Sennwald und führt dich zur Alp Rohr, wo eine gemütliche Rast mit herrlicher Aussicht wartet. Von dort geht es zur Alp Eidenen, durch idyllische Alpwiesen und Wälder. Der Abstieg zurück nach Sennwald rundet die Tour perfekt ab. Eine ideale Halbtageswanderung mit beeindruckenden Panoramen und alpinem Charme!"
			visible={showModal === 4}
			left
		/>
	</h2>
	<img
		onmouseenter={() => (showModal = 3)}
		onmouseleave={() => (showModal = -1)}
		src={Saxerlücke}
		class="bild li"
		alt="Karte"
	/>
	<img
		onmouseenter={() => (showModal = 4)}
		onmouseleave={() => (showModal = -1)}
		src={Tagestour}
		class="bild re"
		alt="Karte"
	/>
	<h2 onmouseenter={() => (showModal = 5)} onmouseleave={() => (showModal = -1)}>
		Sennwald SG – Alp Rohr – Hoher Kasten – Brülisau AI
		<Modal
			text="Starten Sie in Sennwald und wandern Sie hinauf zur Alp Rohr. Nach einer erholsamen Pause geht es weiter zum Hohen Kasten, wo Sie ein beeindruckendes Panorama erwartet. Der Abstieg führt über gut markierte Wege oder mit der Seilbahn hinunter nach Brülisau. Eine eindrucksvolle Tour, die alpinen Genuss und weite Ausblicke kombiniert!"
			visible={showModal === 5}
		/>
	</h2>
	<h2 onmouseenter={() => (showModal = 6)} onmouseleave={() => (showModal = -1)}>
		Sennwald SG – Parkplatz Schwendi – Alp Rohr
		<Modal
			text="Fahren Sie von Sennwald zum Parkplatz Schwendi (begrenzte Parkmöglichkeiten). Von dort aus erreichen Sie die Alp Rohr nach einem etwa 1-stündigen Fussmarsch. Der Weg führt durch idyllische Natur und bietet wunderschöne Ausblicke – ideal für eine kurze, aber lohnende Wanderung!"
			visible={showModal === 6}
			left
		/>
	</h2>
	<img
		onmouseenter={() => (showModal = 5)}
		onmouseleave={() => (showModal = -1)}
		src={SennwaldBrülisau}
		class="bild li"
		alt="Karte"
	/>
	<img
		onmouseenter={() => (showModal = 6)}
		onmouseleave={() => (showModal = -1)}
		src={Sennwald}
		class="bild re"
		alt="Karte"
	/>
	<h2 onmouseenter={() => (showModal = 7)} onmouseleave={() => (showModal = -1)}>
		Sennwald SG – Alp Rohr
		<Modal
			text="Starten Sie direkt im Dorf Sennwald und wandern Sie etwa 2 Stunden durch abwechslungsreiche Landschaften hinauf zur Alp Rohr. Der Weg führt durch Wälder und Wiesen, begleitet von herrlichen Ausblicken ins Rheintal – ein perfekter Einstieg in die Bergwelt!"
			visible={showModal === 7}
		/>
	</h2>
	<img
		onmouseenter={() => (showModal = 7)}
		onmouseleave={() => (showModal = -1)}
		src={SennwaldAlpRohr}
		class="bild li"
		alt="Karte"
	/>
</div>

<style>
	#wanderwege {
		margin-bottom: 60px;
	}

	.bild {
		background-color: lightblue;
		width: 100%;
	}

	h2 {
		grid-column: span 5;
		position: relative;
		padding-bottom: 24px;
		box-sizing: border-box;
		margin-bottom: -8px;
	}

	.bild.li {
		grid-column: 1 / span 4;
	}

	.bild.re {
		grid-column: 6 / span 4;
	}

	h3 {
		font-weight: 500;
		line-height: 1.2;
		letter-spacing: 4%;
		font-size: clamp(1rem, 2.1vw, 32px);
	}
</style>
