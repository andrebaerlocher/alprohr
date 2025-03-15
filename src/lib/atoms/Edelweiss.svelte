<script lang="ts">
	import { responsive } from '$lib/aux/Responsive.svelte';

	const events: { title: string; dateString: string; date: Date }[] = [
		{
			title: 'Antrinketen Alp Rohr',
			dateString: '11. Mai',
			date: new Date(2025, 4, 11)
		},
		{
			title: 'Auffahrts Stubete',
			dateString: '30./31. Mai',
			date: new Date(2025, 4, 30)
		},
		{
			title: 'Pfingst Stubete',
			dateString: '08. Juni',
			date: new Date(2025, 5, 8)
		},
		{
			title: 'Knusprige Vollmondnacht',
			dateString: '11. Juni',
			date: new Date(2025, 5, 11)
		},
		{
			title: 'Knusprige Vollmondnacht',
			dateString: '10. Juli',
			date: new Date(2025, 6, 10)
		},
		{
			title: '1. Augustfeier',
			dateString: '1. August',
			date: new Date(2025, 7, 1)
		},
		{
			title: 'Knusprige Vollmondnacht',
			dateString: '7. September',
			date: new Date(2025, 8, 7)
		}
	];

	let currentEvent = $derived.by<{ title: string; dateString: string; date: Date }>(() => {
		const now = new Date();
		const futureEvents = events.filter((event) => event.date > now);
		const nextEvent = futureEvents.length > 0 ? futureEvents[0] : events[0];
		return nextEvent;
	});
</script>

<button
	class="wrap"
	class:mobile={responsive.isMobile}
	class:visible={responsive.scrollPos > 800}
	style="--scrollpos: calc(40dvh - {responsive.scrollPos - 800}px)"
>
	<svg
		class:mobileSVG={responsive.isMobile}
		id="Ebene_2"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		viewBox="0 0 425.2 425.2"
	>
		<!-- Generator: Adobe Illustrator 29.1.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 142)  -->
		<defs>
			<style>
				.st0 {
					fill: #fff;
				}
			</style>
		</defs>
		<path
			class="st0"
			d="M134.97,222.52s-49.33,8.77-75.24,39.86c0,0-7.59,8.01,2.05,14.63,11.86,7.51,74.36.3,82.49-5.42,0,0-10.24,28-3.91,29.2s14.45-3.01,20.17-6.62l-23.18,51.48s-6.02,14.15,1.2,17.16,40.61-16.56,74.05-63.23c0,0,1.92,5.21,6.04,9.63,9.44,10.14,24.73,36.16,31.93,50.04.58,1.12,1.24,2.2,2.01,3.19,1.68,2.16,4.69,5.28,8.21,5.48,5.42.3,9.33-4.21,9.94-13.55.6-9.33,0-42.45,0-42.45,0,0,9.33,11.74,16.56,10.54,7.23-1.2,7.23-28.6-5.12-55.1,0,0,28.55,8.9,62.92,35.53,21.38,16.56-4.52-65.62-44.26-80.38,0,0,55.65-21.32,65.65-67.42.64-2.96-2.47-5.32-5.16-3.93-11.48,5.9-38.13,16.92-76.75,16.7,0,0,2.71-5.72-.6-12.34s-13.25,2.71-13.25,2.71c0,0,12.65-17.76,15.66-43.96,3.01-26.19,14.75-49.98,5.12-56.6-9.63-6.62-15.96,9.63-23.48,17.76-7.53,8.13-48.81,40.95-55.41,66.24l-58.69-75.57s-6.14-7.48-12.04-4.52c-8.42,4.23,5.72,75.27,15.96,90.32,0,0-8.21-1.37-17.84-10.1-1.44-1.31-3.27-2.18-5.21-2.34-2.72-.22-5.73.87-4.61,7.3.24,1.37.65,2.71,1.17,4,1.98,4.98,8.42,20.41,14.44,26.43,0,0-25.76,1.02-56.15-15.25-3.63-1.94-7.07-4.23-10.39-6.67-3.02-2.22-8.29-4.91-12.34-.66-6.02,6.32,15.72,56.31,68.07,67.9Z"
		/>
	</svg>
	<a
		href="/EVENT 2025.pdf"
		style="text-decoration: none; color: black;"
		class:mobilep={responsive.isMobile}
		style:font-weight="bold"
		style:grid-row="1"
		style:align-self="end"
	>
		{currentEvent.title}
	</a>
	<a
		href="/EVENT 2025.pdf"
		style="text-decoration: none; color: black;"
		class:mobilep={responsive.isMobile}
		style:grid-row="2"
		style:align-self="start"
	>
		{currentEvent.dateString}
	</a>
</button>

<style>
	.wrap {
		all: unset;
		text-decoration: none;
		color: black;
		position: fixed;
		width: 20dvw;
		right: 0dvw;
		top: var(--scrollpos);
		transform-origin: 100% 50%;
		transform: scale(0.8);
		transition:
			transform 0.3s ease-in-out,
			right 0.3s ease-in-out;
		display: grid;
		grid-template-rows: 3fr 2fr;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 0px;
		pointer-events: auto;
		max-width: 100%;
	}

	.wrap > * {
		grid-column: 1;
	}

	a {
		text-align: center;
		width: 10dvw;
		margin: 0px;
		pointer-events: auto;
	}

	svg {
		width: 100%;
		height: 100%;
		grid-row: 1/-1;
		transform: scale(2);
		z-index: -10;
		opacity: 0.5;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
		transition: all 0.3s ease-in-out;
	}

	.mobileSVG {
		opacity: 0.7;
	}

	svg:hover {
		opacity: 90%;
		filter: drop-shadow(0 0 14px rgba(0, 0, 0, 0.5));
	}

	.wrap:hover {
		transform: scale(1);
		right: 0;
	}

	.visible {
		top: var(--scrollpos);
		transform: scale(0.5);
		right: -8dvw;
		top: 40dvh;
	}

	.mobile {
		width: 300px;
		pointer-events: none;
	}

	.mobile.visible {
		top: 40dvh;
	}

	.mobile:hover {
		transform: scale(0.5);
		right: -8dvw;
	}

	.mobilep {
		width: 150px;
	}
</style>
