export function clickAway(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('clickAway'))
		}
	}
	
	document.addEventListener('click', handleClick, true)

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true)
		}
	}
}