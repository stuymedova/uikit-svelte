export function longPress(node, duration = 100) {
  let timer

	const onMouseDown = () => {
		timer = setTimeout(() => {
      node.dispatchEvent(new CustomEvent('longPress'))
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