<script lang="ts">
	import Logo from '$lib/images/Logo.png';
</script>

<div id="footer" class="g10">
	<div id="flinks" class="g3">
		<a href="/datenschutz">Datenschutz</a>
		<a href="/impressum">Impressum</a>
		<a href="/agb" style:margin-bottom="1rem">AGB</a>

		<a href="/gutscheine">Gutscheine</a>
	</div>

	<div id="fmitte" class="g3">
		<img src={Logo} alt="logo" />
	</div>

	<div id="frechts" class="g4">
		<div>Nicole & André van Kesteren</div>
		<div>Alte Landstrasse 83</div>
		<div>9445 Rebstein, Schweiz</div>
		<div>a.vankesteren@gmx.ch</div>
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
</style>
