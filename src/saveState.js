import { checkForStorage, storageType, storage } from './utils'

export default store => next => action => {
  if (typeof (window) === 'undefined' || !checkForStorage()) return next(action)

  const result = next(action)

  const state = store.getState()
  const serializedState = JSON.stringify(state)

  try {
    storage('setItem', serializedState)
  } catch (e) {
    console.error('Error saving state : ', e)
  }
  return result
}
