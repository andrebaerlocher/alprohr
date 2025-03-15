<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
	import Logo from '$lib/images/Logo.png';
	import Datenschutz from '$lib/organism/Datenschutz.svelte';
	import Impressum from '$lib/organism/Impressum.svelte';

	let showDatenschutz = $state<boolean>(false);
	let showImpressum = $state<boolean>(false);
</script>

<div id="footer" class="fullg" class:isMobile={responsive.isMobile}>
	<div id="flinks" class="g3">
		<button onclick={() => (showDatenschutz = true)}>Datenschutz</button>
		<button onclick={() => (showImpressum = true)}>Impressum</button>
		<a href="/AGB.pdf" style:margin-bottom="1rem">AGB</a>

		<a href="/gutscheine">Gutscheine</a>
	</div>

	<div id="fmitte" class="g5" class:mobilelogo={responsive.isMobile}>
		<img src={Logo} alt="logo" />
	</div>

	<div id="frechts" class="g4">
		<div>Nicole & André Van Kesteren</div>
		<div>Alte Landstrasse 83</div>
		<div>9445 Rebstein, Schweiz</div>
		<a href="mailto:a.vankesteren@gmx.ch">a.vankesteren@gmx.ch</a>
		<div>079 656 05 81</div>
	</div>
</div>

<Datenschutz bind:visible={showDatenschutz} />
<Impressum bind:visible={showImpressum} />

<style>
	#footer {
		margin-bottom: 60px;
		min-height: 60dvh;
	}

	button {
		all: unset;
		cursor: pointer;
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

	.isMobile > #frechts {
		align-items: start;
	}
	.isMobile > #flinks {
		align-items: center;
	}

	.mobilelogo {
		justify-self: center;
	}
</style>
