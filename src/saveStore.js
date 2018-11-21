import { checkForStorage, storageType, storage} from './utils'

export default (appName) => {
  // Feels to dangerous to allow people to have a default app name, because their apps will clash
  if (!appName) throw new Error('An appName must be supplied')
  storageType.setAppName(appName)

  return store => next => action => {
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
}
