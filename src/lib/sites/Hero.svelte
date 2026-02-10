<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
	import Header from '$lib/organism/Header.svelte';
</script>

<div class="hero g10m" class:mobile={responsive.isMobile}>
	<div id="top" class="after-lg">
		<div id="links">
			<div id="res">
				Reservationen: <a href="mailto:a.vankesteren@gmx.ch">a.vankesteren@gmx.ch</a>
			</div>
			<div id="tel">079 656 05 81</div>
		</div>
		<a href="#zeiten" id="rechts">
			<div id="rechtsoben">Öffnungszeiten im April:</div>
			<div id="rechtsunten">An den Wochenenden</div>
		</a>
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
		box-sizing: border-box;
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
		align-items: center;
		font-size: 1rem;
		line-height: 1rem;
		width: 100%;
		gap: 1rem;
		padding: 0.5rem 0;
	}

	#links {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 0.5rem;
	}

	a {
		color: white;
		font-family: inherit;
		text-decoration: none;
		cursor: pointer;
	}

	#res {
		border-right: 1px white solid;
		padding: 0.25rem 0.5rem 0.25rem 0;
	}

	#tel {
		padding: 0.25rem 0 0.25rem 0.5rem;
	}

	#rechts {
		display: flex;
		flex-flow: column nowrap;
		gap: 0.25rem;
		text-align: right;
	}

	.mobile #top {
		flex-direction: column;
		align-items: flex-start;
	}

	.mobile #links {
		width: 100%;
		justify-content: space-between;
	}

	.mobile #res {
		border-right: none;
		padding-right: 0;
	}

	.mobile #rechts {
		width: 100%;
		text-align: left;
	}

	.mobile {
		display: grid;
		grid-template-columns: 1fr;
		grid-column: 1 / -1;
		padding: 1rem;
		box-sizing: border-box;
		margin-left: 0px;
	}

	.mobile > * {
		padding: 0px;
		max-width: calc(100dvw);
	}

	@media (max-width: 600px) {
		#res,
		#tel {
			width: 100%;
			padding: 0.25rem 0;
			border-right: none;
		}
	}
</style>
