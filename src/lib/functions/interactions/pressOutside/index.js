export function pressOutside(node) {
	const onClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('pressOutside'))
		}
	}
	
	
	document.addEventListener('click', onClick, true)

	return {
		destroy() {
			document.removeEventListener('click', onClick, true)
		}
	}
}