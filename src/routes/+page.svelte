<script lang="ts">
	import Aktivitaeten from '$lib/sites/Aktivitaeten.svelte';
	import Alpbild from '$lib/sites/Alpbild.svelte';
	import Alphorn from '$lib/sites/Alphorn.svelte';
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
	import Sonnenbild from '$lib/sites/Sonnenbild.svelte';
	import Talblick from '$lib/sites/Talblick.svelte';
	import Urige from '$lib/sites/Urige.svelte';
	import Wanderwege from '$lib/sites/Wanderwege.svelte';
	import Wohnen from '$lib/sites/Wohnen.svelte';
	import Zwischen from '$lib/sites/Zwischen.svelte';
	import Erlebe from '$lib/sites/Erlebe.svelte';
</script>

<div class="page">
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
		style:background-size="87%"
		style:background-repeat="no-repeat"
	>
		<Alpbild />
	</div>
	<div class="half" style:background-image="url('/images/Aussicht.JPG')">
		<Aussicht />
	</div>
	<div class="fullh">
		<BentoOben />
	</div>
	<div class="half">
		<Aktivitaeten />
	</div>
	<div class="half" style:background-image="url('/images/Talblick.webp')">
		<Talblick />
	</div>
	<div class="plus">
		<BentoMitte />
	</div>
	<div
		class="half"
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
		style:background-image="linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/images/KulinarischesUnten.png')"
		style:background-size="65%"
		style:background-repeat="no-repeat"
		style:background-position="-35% 600%"
	>
		<Kulinarisches />
	</div>
	<div
		class="half"
		style:background-image="linear-gradient(#4D4C4C66,#4D4C4C66),url('/images/Nachten.jpg')"
	>
		<Urige />
	</div>
	<div class="half">
		<Erlebe />
	</div>
	<div class="plus">
		<Wohnen />
	</div>
	<div class="half" style:background-image="url('/images/Zwischen.jpg')">
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
	<div class="half">
		<Sonnenbild />
	</div>
	<div class="plus">
		<Wanderwege />
	</div>
	<div
		class="half"
		style:background-image="linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/Alphorn.png');"
	>
		<Alphorn />
	</div>
	<div class="fullh">
		<Karte />
	</div>
	<div
		class="auto"
		style:background-image="url('/images/Footer.png');"
		style:background-position="center top"
	>
		<Footer />
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-flow: column nowrap;
	}
	.page > * {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		column-gap: 24px;
		width: 100%;
		padding-left: 60px;
		padding-right: 60px;
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
</style>
