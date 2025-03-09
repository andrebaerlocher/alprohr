<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
	import Logo from '$lib/images/Logo.png';
</script>

<div id="footer" class="fullg" class:isMobile={responsive.isMobile}>
	<div id="flinks" class="g3">
		<a href="/datenschutz">Datenschutz</a>
		<a href="/impressum">Impressum</a>
		<a href="/AGB.pdf" style:margin-bottom="1rem">AGB</a>

		<a href="/gutscheine">Gutscheine</a>
	</div>

	<div id="fmitte" class="g5" class:mobilelogo={responsive.isMobile}>
		<img src={Logo} alt="logo" />
	</div>

	<div id="frechts" class="g4">
		<div>Nicole & André van Kesteren</div>
		<div>Alte Landstrasse 83</div>
		<div>9445 Rebstein, Schweiz</div>
		<a href="mailto:a.vankesteren@gmx.ch">a.vankesteren@gmx.ch</a>
		<div>079 656 05 81</div>
	</div>
</div>

<style>
	#footer {
		margin-bottom: 60px;
		min-height: 60dvh;
	}

	#footer > * {
		display: flex;
		flex-flow: column nowrap;
		overflow: clip;
		align-self: end;
		padding-bottom: 60px;
	}

	a {
		color: black;
		text-decoration: none;
	}

	#frechts {
		align-items: flex-end;
	}

	.isMobile {
		display: flex;
		flex-flow: column nowrap;
		width: 100%;
		padding: 1rem;
		box-sizing: border-box;
		justify-content: center;
	}

	.isMobile > * {
		justify-content: center;
		width: 100%;
	}

	.mobilelogo {
		justify-self: center;
	}
</style>
