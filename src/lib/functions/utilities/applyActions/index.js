export function applyActions(node, passedActions) {
  if (!passedActions) return

  const returnValuesOfActions = []

  for (const passedAction of passedActions) {
    const { action, parameter } = passedAction
    returnValuesOfActions.push(action(node, parameter))
  }

  // TODO: return "update" method
  return {
    destroy() {
      for (const action of returnValuesOfActions) {
        if (typeof action.destroy === 'function') {
          action.destroy()
        }
      }
    }
  }
}