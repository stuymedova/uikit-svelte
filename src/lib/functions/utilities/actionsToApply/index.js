export function actionsToApply(node, actions) {
  const decoupledActions = actions.map(({ action, parameter }) => {
    return action(node, parameter)
  })

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