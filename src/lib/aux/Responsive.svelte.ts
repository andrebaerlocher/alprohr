class ClassResponsive {
	winWidth = $state<number>(1400);
	isMobile = $derived<boolean>(this.winWidth < 600);
}

export const responsive = new ClassResponsive();
