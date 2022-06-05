export function pressAndHold(node, duration = 100) {
  let timer

	const onMouseDown = () => {
		timer = setTimeout(() => {
      node.dispatchEvent(new CustomEvent('pressAndHold'))
    }, duration)
	}

  const onMouseUp = () => {
    clearTimeout(timer)
  }
	
	
	node.addEventListener('mousedown', onMouseDown)
	node.addEventListener('mouseup', onMouseUp)

	return {
		destroy() {
			node.removeEventListener('mousedown', onMouseDown)
	    node.removeEventListener('mouseup', onMouseUp)
		}
	}
}