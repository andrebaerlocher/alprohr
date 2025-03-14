<script lang="ts">
	import Aktivitaeten from '$lib/sites/Aktivitaeten.svelte';
	import Alpbild from '$lib/sites/Alpbild.svelte';
	import Aussicht from '$lib/sites/Aussicht.svelte';
	import BentoMitte from '$lib/sites/BentoMitte.svelte';
	import BentoOben from '$lib/sites/BentoOben.svelte';
	import Event from '$lib/sites/Event.svelte';
	import Footer from '$lib/sites/Footer.svelte';
	import Hero from '$lib/sites/Hero.svelte';
	import Huettenbild from '$lib/sites/Huettenbild.svelte';
	import Karte from '$lib/sites/Karte.svelte';
	import Kulinarisches from '$lib/sites/Kulinarisches.svelte';
	import Schonen from '$lib/sites/Schonen.svelte';
	import Talblick from '$lib/sites/Talblick.svelte';
	import Urige from '$lib/sites/Urige.svelte';
	import Wanderwege from '$lib/sites/Wanderwege.svelte';
	import Wohnen from '$lib/sites/Wohnen.svelte';
	import Zwischen from '$lib/sites/Zwischen.svelte';
	import Erlebe from '$lib/sites/Erlebe.svelte';
	import { responsive } from '$lib/aux/Responsive.svelte';

	let aussichtElement = $state<HTMLDivElement | null>(null);
	let talblickElement = $state<HTMLDivElement | null>(null);
	let huettenBildElement = $state<HTMLDivElement | null>(null);
	let zwischenElement = $state<HTMLDivElement | null>(null);
	let sonnenBildElement = $state<HTMLDivElement | null>(null);
	let alpHornElement = $state<HTMLDivElement | null>(null);
	let alpbildElement = $state<HTMLDivElement | null>(null);
	let aktiviElement = $state<HTMLDivElement | null>(null);

	function getPosition(div: HTMLDivElement): number {
		if (!div) return 50;
		if (!responsive.isMobile) return 50;
		const divHeight = div.offsetHeight;
		const divTop = div.offsetTop;
		const minScroll = divTop - (responsive.winHeight - divHeight);
		const maxScroll = divTop;
		// Calculate the ratio of the current scroll position within the defined range.
		const progress = (responsive.scrollPos - minScroll) / (maxScroll - minScroll);
		// Clamp the result between 0 and 100.
		return Math.max(0, Math.min(progress * 100, 100));
	}
</script>

<div
	class="page"
	style="--scrollPos: {responsive.scrollPos};"
	class:mobilePage={responsive.isMobile}
>
	<!-- <div class="fullh ex">
		{#each { length: 12 }, i}
			<div class="bar">{i}</div>
		{/each}
	</div> -->
	<div
		class="fullh"
		style:background-image="linear-gradient(#6B6B6B4D, #6B6B6B4D), url('/images/VK Hero Image.jpg');"
	>
		<Hero />
	</div>
	<div
		class="half"
		style:background-image="linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/Alpbild.png')"
		style:background-size={responsive.isMobile ? '1200px' : '87%'}
		style:background-repeat="no-repeat"
		bind:this={alpbildElement}
		style:background-position="{getPosition(alpbildElement)}% center"
	>
		<Alpbild />
	</div>
	<div
		class="half"
		bind:this={aussichtElement}
		style:background-position="{getPosition(aussichtElement)}% center"
		style:background-image="url('/images/Aussicht.JPG')"
	>
		<Aussicht />
	</div>
	<div class="fullh">
		<BentoOben />
	</div>
	<div class="half" bind:this={aktiviElement}>
		<Aktivitaeten x={getPosition(aktiviElement)} />
	</div>
	<div
		class="half"
		bind:this={talblickElement}
		style:background-position="{getPosition(talblickElement)}% center"
		style:background-image="url('/images/Talblick.webp')"
	>
		<Talblick />
	</div>
	<div class="plus">
		<BentoMitte />
	</div>
	<div
		class="half"
		bind:this={huettenBildElement}
		style:background-position="{getPosition(huettenBildElement)}% center"
		style:background-image="linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/Huettenbild.png')"
		style:background-repeat="no-repeat"
	>
		<Huettenbild />
	</div>
	<div class="fullh">
		<Schonen />
	</div>
	<div
		class="auto noclip"
		id="kulinarisches"
		style:background-image="linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/images/KulinarischesUnten.png')"
		style:background-size="65%"
		style:background-repeat="no-repeat"
		style:background-position="-35% 600%"
	>
		<Kulinarisches />
	</div>
	<div
		class="half"
		bind:this={zwischenElement}
		style:background-position="{getPosition(zwischenElement)}% center"
		style:background-image="url('/images/Zwischen.jpg')"
	>
		<Zwischen />
	</div>
	<div
		class="fullh noclip"
		style:background-image="linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/Herz.png')"
		style:background-size="55%"
		style:background-repeat="no-repeat"
		style:background-position="-25% 150%"
	>
		<Event />
	</div>
	<div
		class="half"
		style:background-image="linear-gradient(#4D4C4C66,#4D4C4C66),url('/images/Nachten.jpg')"
	>
		<Urige />
	</div>
	<div class="auto">
		<Erlebe />
	</div>
	<div class="plus" id="uebernachten">
		<Wohnen />
	</div>
	<div
		class="half"
		style:background-image="url('/images/Panorama.jpg');"
		bind:this={sonnenBildElement}
		style:background-position="{getPosition(sonnenBildElement)}% center"
	></div>
	<div class="plus">
		<Wanderwege />
	</div>
	<div
		class="half"
		class:alpmobile={responsive.isMobile}
		bind:this={alpHornElement}
		style:background-position="{getPosition(alpHornElement)}% center"
		style:background-image="linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/Alphorn.png');"
	></div>
	<div class="half">
		<Karte />
	</div>
	<div
		class="auto"
		id="kontakt"
		style:background-image="linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url('/images/Footer.png');"
		style:background-position="center top"
	>
		<Footer />
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-flow: column nowrap;
		grid-row: 1 / -1;
		grid-column: 1 / -1;
	}
	.page > * {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		padding-left: clamp(1rem, 5dvw, 60px);
		padding-right: clamp(1rem, 5dvw, 60px);
		column-gap: 24px;
		width: 100%;
		box-sizing: border-box;
		background-size: cover;
		background-position: center;
	}

	.fullh {
		min-height: 100dvh;
	}

	.half {
		min-height: 50dvh;
	}

	.noclip {
		overflow: visible;
	}

	.mobilePage > * {
		padding-left: 0px;
		padding-right: 0px;
	}

	.alpmobile {
		background-size: 800px;
	}
	/*
	.bar {
		background-color: #6b6b6b20;
		height: 100%;
	}

	.ex {
		position: fixed;
	} */
</style>
