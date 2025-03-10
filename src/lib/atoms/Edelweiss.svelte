<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div
	class="wrap"
	class:visible={responsive.scrollPos > 800}
	style="--scrollpos: calc({responsive.scrollPos}px + 30dvh)"
>
	{responsive.scrollPos}
</div>

<style>
	.wrap {
		position: absolute;
		background-color: blue;
		width: 10dvw;
		top: 1400px;
		right: 0px;
		transition: all 0.1s ease-in-out;
	}

	.wrap:hover {
		transform-origin: 100% 50%;
		transform: scale(2);
	}

	.visible {
		top: var(--scrollpos);
	}
</style>
