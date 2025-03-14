<script lang="ts">
	import { blur } from 'svelte/transition';

	let { visible = $bindable() }: { visible: boolean } = $props();
</script>

{#if visible}
	<button transition:blur={{ duration: 300 }} onclick={() => (visible = false)}>
		<div class="modal">
			<h1>Impressum</h1>

			<p>
				Nicole und Andre Van Kesteren<br />
				Alp Rohr<br />
				Alte Landstrasse 83<br />
				9445 Rebstein
			</p>

			<p>
				Handelsregister: CH-320.1.088.560-9<br />
				Registergericht: Kanton St. Gallen
			</p>

			<h2>Kontakt</h2>
			<p>
				Telefon: 079 656 05 81<br />
				E-Mail: a.vankesteren@gmx.ch
			</p>

			<h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
			<p>
				<strong>Name und Sitz des Versicherers:</strong><br />
				Mobiliar Agentur Rheintal<br />
				Bahnhofstrasse 2<br />
				9435 Heerbrugg
			</p>
			<p>
				<strong>Geltungsraum der Versicherung:</strong><br />Schweiz F&uuml;rstentum Lichtenstein
			</p>

			<h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
			<p>
				Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
				Verbraucherschlichtungsstelle teilzunehmen.
			</p>

			<p>
				Quelle: <a href="https://www.e-recht24.de/impressum-generator.html"
					>https://www.e-recht24.de/impressum-generator.html</a
				>
			</p>
		</div>
	</button>
{/if}

<style>
	button {
		all: unset;
		cursor: pointer;
		position: absolute;
		height: 100dvh;
		width: 100dvw;
		top: 0;
		left: 0;
		backdrop-filter: blur(20px);
	}

	.modal {
		position: absolute;
		bottom: 5dvh;
		height: 90dvh;
		left: 2dvw;
		width: 96vw;
		padding: 1rem;
		background-color: rgba(255, 255, 255, 0.8);
		z-index: 10000;
		box-sizing: border-box;
		overflow: scroll;

		border-radius: 0.5rem;
		border: 1px solid #ccc;
	}

	h1 {
		font-size: 2em;
		color: #333;
		margin-bottom: 20px;
	}

	h2 {
		font-size: 1.5em;
		color: #444;
		margin-top: 30px;
		margin-bottom: 15px;
	}

	h3 {
		font-size: 1.2em;
		color: #555;
		margin-top: 25px;
		margin-bottom: 10px;
	}

	h4 {
		font-size: 1.1em;
		color: #666;
		margin-top: 20px;
		margin-bottom: 10px;
	}
</style>
