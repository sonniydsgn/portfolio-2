export const isMobile = () => {
	if (window.innerWidth <= 880) {
		return true
	}

	return false
}

export const isTablet = () => {
	if (window.innerWidth > 880 && window.innerWidth <= 1200) {
		return true
	}

	return false
}

export const isDesktop = () => {
	if (window.innerWidth > 1200) {
		return true
	}

	return false
}
