class ClassResponsive {
	winWidth = $state<number>(1400);
	winHeight = $state<number>(800);
	isMobile = $derived<boolean>(this.winWidth < 700);
	scrollPos = $state<number>(0); // Scroll position
	isSafari = $derived.by<boolean>(() => {
		if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
			return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		}
		return false;
	});
}

export const responsive = new ClassResponsive();

export function scrollTo(id: string) {
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
	}
}
