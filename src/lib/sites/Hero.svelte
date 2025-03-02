<script lang="ts">
	import Header from '$lib/organism/Header.svelte';
</script>

<div class="hero g10m">
	<div id="top" class="after-lg">
		<div id="links">
			<div id="res">
				Reservationen: <a href="mailto:a.vankesteren@gmx.ch">a.vankesteren@gmx.ch</a>
			</div>
			<div id="tel">079 656 05 81</div>
		</div>
		<div id="rechts">
			<div id="rechtsoben">Öffnungszeiten: Mai - Oktober</div>
			<div id="rechtsunten">Dienstag Ruhetag</div>
		</div>
	</div>
	<Header />
	<h1>Herzlich Willkommen bi üs!</h1>
	<h3 class="raleway">
		Nicole und André heissen dich herzlich Willkommen in der Alp Rohr. Freu dich auf ein gemütliches
		Ambiente in unserer Berghütte, feine Köstlichkeiten und einen Ausblick, die den Aufstieg
		unvergesslich machen.
	</h3>
</div>

<style>
	.hero {
		display: grid;
		grid-template-rows: repeat(3, auto) 1fr;
		gap: 1.5rem;
		height: 100%;
		color: whitesmoke;
	}

	h1 {
		font-size: clamp(3rem, 6vw, 90px);
	}

	h3 {
		letter-spacing: 4%;
		line-height: 1.2;
		font-size: clamp(1rem, 2.35vw, 32px);
	}

	#top {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		font-size: 24px;
		height: 2rem;
		font-size: 1rem;
		line-height: 1rem;
	}

	#links {
		display: flex;
		flex-flow: row nowrap;
	}

	a {
		color: white;
		font-family: inherit;
		text-decoration: none;
		cursor: pointer;
	}

	#res {
		border-right: 1px white solid;
		padding: 0.25rem;
		padding-right: 0.5rem;
		padding-left: 0rem;
		align-content: center;
	}

	#tel {
		padding: 0.25rem;
		padding-left: 0.5rem;
		align-content: center;
	}

	#rechts {
		padding-top: 0.5rem;
		display: flex;
		flex-flow: column nowrap;
		gap: 0.25rem;
	}

	#rechts > * {
		text-align: right;
	}
</style>
