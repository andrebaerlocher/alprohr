<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';
</script>

<div id="zwischen" class="wide" class:zwischenMobile={responsive.isMobile}>
	<h2 class:h2Mobile={responsive.isMobile}>
		Die Alp Rohr - zwischen Rheintal und dem Hohen Kasten
	</h2>
</div>

<style>
	#zwischen {
		display: grid;
		justify-content: center;
	}

	.zwischenMobile {
		grid-column: 1 / -1;
		margin-left: 0px;
		padding: 1rem;
		box-sizing: border-box;
		align-content: center;
	}

	.h2Mobile {
		text-shadow:
			-1px -1px 0 #ffffff70,
			1px -1px 0 #ffffff70,
			-1px 1px 0 #ffffff70,
			1px 1px 0 #ffffff70;
	}
</style>
