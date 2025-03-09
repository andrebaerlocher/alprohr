<script lang="ts">
	import Modal from '$lib/atoms/Modal.svelte';

	let { titel, img, text, left }: { text: string; img: string; titel: string; left: boolean } =
		$props();

	let showModal = $state<boolean>(false);
</script>

<button
	class="wandercard"
	onmouseenter={() => (showModal = true)}
	onclick={() => (showModal = true)}
	onmouseleave={() => (showModal = false)}
>
	<h2>
		{titel}
		<Modal {text} visible={showModal} {left} />
	</h2>

	<img
		src={img}
		class="bild re"
		alt="Karte"
		onmouseenter={() => (showModal = true)}
		onmouseleave={() => (showModal = false)}
	/>
</button>

<style>
	h2 {
		position: relative;
		padding-bottom: 24px;
		box-sizing: border-box;
		margin-bottom: -8px;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	img {
		background-color: lightblue;
		width: 100%;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		margin-bottom: -3px;
	}

	button {
		background-color: transparent;
		backdrop-filter: brightness(0.96);
		border: 1px solid whitesmoke;
		border-radius: 1rem;
		padding: 0;
		margin: 0;
		align-content: start;
		margin-bottom: 24px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
</style>
