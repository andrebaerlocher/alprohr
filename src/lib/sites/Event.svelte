<script lang="ts">
	import Event from '$lib/images/Events.jpg';
</script>

<div id="event" class="g10">
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
</div>

<style>
	#event {
		height: 100dvh;
		grid-template-rows: auto auto auto 1fr;
		align-content: center;
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
</style>
