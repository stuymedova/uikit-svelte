export function componentActions(node, passedActions) {
  if (!passedActions) return

  const decoupledActions = passedActions.map((passedAction) => {
    const { action, parameter } = passedAction
    return action(node, parameter)
  })

  // TODO: return "update" method
  return {
    destroy() {
      for (const action of decoupledActions) {
        if (typeof action.destroy === 'function') {
          action.destroy()
        }
      }
    }
  }
}