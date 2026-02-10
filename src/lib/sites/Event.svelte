<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
	import Event from '$lib/images/Events.jpg';
</script>

<div id="event" class="g10" class:mobileEvent={responsive.isMobile}>
	<h1 class="full">Dein Event</h1>
	<div class="text g6">
		Ein gemütliches Familientreffen, ein Firmenevent, ein Vereinsausflug oder eine
		Geburtstagsfeier... Es gibt immer einen Grund zu feiern und beisammen zu sein. Gerne
		organisieren wir dir deinen einmaligen Anlass.
	</div>
	<img src={Event} alt="Events" class="g4" />
	<h3 class="full raleway charme">
		Lass dich vom Charme unserer Berghütte verzaubern und geniesse eine einzigartige Übernachtung
		inmitten der beeindruckenden Natur. Wir freuen uns darauf, dich bei uns willkommen zu heissen!
	</h3>
	<div class="but">
		<a href="/EVENT 2026.pdf">Unsere Events 2026</a>
	</div>
</div>

<style>
	.but {
		grid-column: 7 / -1;
		display: grid;
		place-items: center;
		border-radius: 0.5rem;
		background-color: lightblue;
		height: 3rem;
		border: 1px solid blue;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		transform: translateY(0);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.but:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
	}

	a {
		text-decoration: none;
		color: black;
		font-size: clamp(1rem, 2.5dvw, 3rem);
	}

	#event {
		min-height: 100dvh;
		grid-template-rows: auto auto auto 1fr;
		align-content: center;
	}

	.mobileEvent {
		grid-column: 1 / -1;
		margin-left: 0px;
		margin-right: 0px;
		grid-template-rows: auto auto auto auto;
		grid-template-columns: 1fr;
		padding: 2rem;
		box-sizing: border-box;
		gap: 2rem;
	}

	img {
		width: 100%;
		height: auto;
	}

	.text {
		font-size: clamp(1rem, 2dvw, 3rem);
		line-height: 1.4;
		align-self: center;
	}

	h3 {
		font-size: clamp(1rem, 2.5dvw, 5rem);
		letter-spacing: 4%;
		line-height: 1.5;
	}

	.charme {
		margin-top: 4rem;
	}

	.mobileEvent > * {
		grid-column: 1 / -1;
		hyphens: auto;
		border-radius: 0.5rem;
		margin-top: 0px;
	}

	.mobileEvent > h1 {
		margin-bottom: -1rem;
	}
</style>
