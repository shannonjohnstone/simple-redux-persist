import { REDUX_LOCAL_STORAGE_PREFIX } from './constants'

export default (() => {
  let storageType = 'session'
  let localStorageKey
  console.log(storageType, 'storageTypeUtils invoked');

  function setAppName(appName) {
    if (!appName) localStorageKey = REDUX_LOCAL_STORAGE_PREFIX
    else localStorageKey = `${REDUX_LOCAL_STORAGE_PREFIX}-${appName}`
  }

  function getLocalStorageKey() {
    return localStorageKey
  }

  function useLocalStorage(appName) {
    storageType = 'local'
    setAppName(appName)
  }

  function getStorageType() {
    return storageType === 'session' ? 'sessionStorage' : 'localStorage'
  }

  return {
    useLocalStorage,
    getStorageType,
    setAppName,
    getLocalStorageKey
  }
})()
