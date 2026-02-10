<script lang="ts">
</script>

<div class="g10m zeiten" id="zeiten">
	<h3>Öffnungszeiten:</h3>
	<div class="monate">
		<div class="monat"><b>April:</b><br /> An den Wochenenden</div>
		<div class="monat"><b>Mai:</b><br /> Dienstag & Mittwoch Ruhetag</div>
		<div class="monat"><b>Juni, Juli, August:</b><br /> Dienstag Ruhetag</div>
		<div class="monat"><b>September, Oktober:</b><br /> Dienstag & Mittwoch Ruhetag</div>
	</div>
	<div class="kuh"><b>An den Ruhetagen:</b> Selbstbedienung an der Kiosk-Kuh</div>
</div>

<style>
	.zeiten {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: end;
	}

	.monate {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1em;
	}
</style>
