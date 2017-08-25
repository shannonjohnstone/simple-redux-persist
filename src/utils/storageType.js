import { REDUX_LOCAL_STORAGE_PREFIX } from './constants'

export default (() => {
  let storageType = 'session'
  let localStorageKey
  console.log(storageType, 'storageTypeUtils invoked');

  function setLocalStorageKey(storageKey) {
    if (!storageKey || storageKey === undefined || storageKey === null) localStorageKey = REDUX_LOCAL_STORAGE_PREFIX
    else localStorageKey = `${REDUX_LOCAL_STORAGE_PREFIX}-${storageKey}`
  }

  function getLocalStorageKey() {
    return localStorageKey
  }

  function useLocalStorage(storageKey) {
    storageType = 'local'
    setLocalStorageKey(storageKey)
  }

  function getStorageType() {
    return storageType === 'session' ? 'sessionStorage' : 'localStorage'
  }

  return {
    useLocalStorage,
    getStorageType,
    setLocalStorageKey,
    getLocalStorageKey
  }
})()
