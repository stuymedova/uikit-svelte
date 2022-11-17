export function applyAction(node, passedAction) {
  if (!passedAction) return

  const { action, parameter } = passedAction
  const returnValueOfAction = action(node, parameter)

  // TODO: return "update" method
  return {
    destroy() {
      if (typeof returnValueOfAction.destroy === 'function') {
        action.destroy()
      }
    }
  }
}