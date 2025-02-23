<script lang="ts">
	import Sennwald from '$lib/images/Sennwald.png';
</script>

<div id="karte" class="g10m">
	<h1>Wo du uns findest</h1>

	<div class="image-container">
		<img src={Sennwald} alt="Karte" class="scaled-image" />
	</div>
</div>

<style>
	.image-container {
		width: 100%;
		overflow: hidden; /* Crucial part */
	}

	.scaled-image {
		width: 100%; /* Takes up 100% of image-container */
		transform: scale(1.4); /* Scales the image */
		transform-origin: center center; /* Ensure top-left is the anchor */
	}
</style>
