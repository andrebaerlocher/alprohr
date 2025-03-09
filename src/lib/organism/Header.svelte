<script lang="ts">
	import Logo from '$lib/images/Logo.png';
</script>

<div
	id="header"
	class="archivo"
	style:background-image="linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url('images/HeaderBG.jpg')"
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
		display: flex;
		flex-flow: row nowrap;
		align-content: center;
		justify-content: space-evenly;
		gap: clamp(0.5rem, 3dvw, 24px);
		height: clamp(1rem, 8dvw, 4rem);
		background-size: cover;
		background-position: center;
		border-radius: 1rem;
		box-sizing: border-box;
		position: relative;
	}

	#header > a {
		display: grid;
		justify-content: center;
		align-content: center;
		font-weight: 600;
		text-decoration: none;
		box-sizing: border-box;
		color: black;
		font-size: clamp(0.8rem, 2dvw, 1.2rem);
	}

	.logo {
		background-color: #e3faff;
		display: grid;
		align-content: center;
		justify-content: center;
		padding: 19px;
		border-radius: 30px;
		top: 50%; /* Center vertically */
		left: 50%; /* Center horizontally */
		transform: translateY(-25%); /* Center element */
		z-index: 10; /* Ensure logo appears above other elements */
		height: clamp(2rem, 10dvw, 5rem);
	}

	img {
		height: clamp(0.8rem, 8dvw, 4rem);
	}
</style>
