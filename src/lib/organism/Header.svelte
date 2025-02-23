<script lang="ts">
	import Logo from '$lib/images/Logo.png';
</script>

<div
	id="header"
	class="archivo"
	style:background-image="linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)),url('images/HeaderBG.jpg')"
>
	<a class="fheader borright" href="/">Startseite</a>
	<a class="fheader" href="/kulinarisches">Kulinarisches</a>
	<div class="logo">
		<img src={Logo} alt="Logo von Alprohr" />
	</div>
	<a class="fheader borright" href="/uebernachten">Übernachten</a>
	<a class="fheader" href="/kontakt">Kontakt</a>
</div>

<style>
	#header {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		align-content: center;
		justify-content: center;
		gap: 24px;
		height: 4rem;
		background-size: cover;
		background-position: center;
		border-radius: 1rem;
		box-sizing: border-box;
	}

	#header > a {
		display: grid;
		justify-content: center;
		align-content: center;
		font-weight: 600;
		text-decoration: none;
		box-sizing: border-box;
		color: black;
	}

	.logo {
		background-color: #e3faff;
		display: grid;
		align-content: center;
		justify-content: center;
		padding: 19px;
		border-radius: 30px;
	}

	img {
		height: 4rem;
	}
</style>
