import useStateWithCallback from 'use-state-with-callback'

export function useState<Type> (newState: Type, callback: void) {
  return useStateWithCallback((oldState: Type) => ({
    ...oldState,
    ...newState
  }), callback)
}
