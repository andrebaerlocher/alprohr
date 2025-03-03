<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
	import Header from '$lib/organism/Header.svelte';
</script>

<div class="hero g10m" class:mobile={responsive.isMobile}>
	<div id="top" class="after-lg" class:topMobile={responsive.isMobile}>
		<div id="links" class:topMobile={responsive.isMobile}>
			<div id="res" class:topMobile={responsive.isMobile}>
				Reservationen: <a href="mailto:a.vankesteren@gmx.ch">a.vankesteren@gmx.ch</a>
			</div>
			<div id="tel" class:topMobile={responsive.isMobile}>079 656 05 81</div>
		</div>
		<div id="rechts" class:topMobile={responsive.isMobile}>
			<div id="rechtsoben" class:topMobile={responsive.isMobile}>Öffnungszeiten: Mai - Oktober</div>
			<div id="rechtsunten" class:topMobile={responsive.isMobile}>Dienstag Ruhetag</div>
		</div>
	</div>
	{#if !responsive.isMobile}
		<Header />
	{/if}

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

	h3 {
		letter-spacing: 4%;
		line-height: 1.2;
		box-sizing: border-box;
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

	.topMobile {
		display: grid;
		grid-template-columns: 1fr;
		max-width: 100dvw;
		box-sizing: border-box;
	}

	.mobile > * {
		padding: 0px;

		max-width: calc(100dvw);
	}
</style>
