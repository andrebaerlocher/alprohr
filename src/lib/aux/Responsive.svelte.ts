class ClassResponsive {
	winWidth = $state<number>(1400);
	winHeight = $state<number>(800);
	isMobile = $derived<boolean>(this.winWidth < 700);
	scrollPos = $state<number>(0); // Scroll position
}

export const responsive = new ClassResponsive();
