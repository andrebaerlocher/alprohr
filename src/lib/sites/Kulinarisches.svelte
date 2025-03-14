<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div id="kulinarisches" class="g10" class:bentmobile={responsive.isMobile}>
	<div class="text g5">
		Bei uns gibt es herzhafte, regionale und frische Köstlichkeiten wie hausgemachte Käsespätzli,
		Wurstkäsesalat oder Cordon Bleu mit hausgemachten Pommes, kalte Plättli und Fitnessteller stehen
		zur Auswahl. Wir unterstützen ausschliesslich Produzenten und Lieferanten aus der Region
		Rheintal und Kanton St. Gallen.
		<br />
		<br />
		Erlebe Genuss, der im Einklang mit der Natur steht, und lass dich von unserer bodenständigen und
		authentischen Alpenküche verwöhnen.
	</div>
	<div class="empty"></div>
	<img class="span3" src="/images/Kul1.jpg" alt="" />
	<img class="span1" src="/images/Kul2.jpg" alt="" />
	<img class="span2" src="/images/Kul3.jpg" alt="" />
	<img class="span2" src="/images/Kul4.jpg" alt="" />
	<img class="span4" src="/images/Kul5.jpg" alt="" />
	<img class="span1" src="/images/Kul6.jpg" alt="" />
	<img class="span3" src="/images/Kul7.jpg" alt="" />
</div>

<style>
	#kulinarisches {
		display: grid;
		gap: 24px;
		grid-template-rows:
			calc((100% - 120px) * 0.269) calc((100% - 120px) * 0.214) calc((100% - 120px) * 0.477)
			calc((100% - 120px) * 0.191);
		box-sizing: border-box;
		padding-top: 60px;
		padding-bottom: 200px;
	}

	.text {
		padding-top: 1rem;
		grid-column: 1 span 5;
		grid-row: 1 / -1;
		display: grid;
		align-self: center;
		hyphens: auto;
		align-self: center;
		font-size: clamp(1rem, 1.95dvw, 3rem);
	}

	.empty {
		grid-column: span 1;
		grid-row: 1 / -1;
	}

	img {
		width: 100%;
		object-fit: cover;
		height: 100%;
	}

	.span1 {
		grid-column: span 1;
	}

	.span2 {
		grid-column: span 2;
	}

	.span3 {
		grid-column: span 3;
	}

	.span4 {
		grid-column: span 4;
	}
	.bentmobile {
		display: flex !important;
		gap: 16px;
		padding: 20px 0;
		box-sizing: border-box;
		flex-flow: column nowrap;
	}
	@supports (-webkit-touch-callout: none) {
		/* Safari-specific fixes */
		#kulinarisches {
			background-attachment: scroll;
			will-change: transform;
		}
		
		img {
			-webkit-transform: translateZ(0);
			transform: translateZ(0);
		}
	}
</style>
