export function pressAndHold(node, duration = 100) {
  let timer

	const handleMousedown = () => {
		timer = setTimeout(() => {
      node.dispatchEvent(new CustomEvent('pressAndHold'))
    }, duration)
	}

  const handleMouseup = () => {
    clearTimeout(timer)
  }
	
	
	node.addEventListener('mousedown', handleMousedown)
	node.addEventListener('mouseup', handleMouseup)

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown)
	    node.removeEventListener('mouseup', handleMouseup)
		}
	}
}