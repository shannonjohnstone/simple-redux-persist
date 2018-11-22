import { REDUX_LOCAL_STORAGE_PREFIX } from './constants'

export default (() => {
  let storageType = 'session'
  let storageKey
  console.log(storageType, 'storageTypeUtils invoked');

  function setNameSpace(nameSpace) {
    storageKey = `${REDUX_LOCAL_STORAGE_PREFIX}-${nameSpace}`
  }

  function setStorageType(type) {
    storageType = type
  }

  function getStorageKey() {
    return storageKey
  }

  function getStorageType() {
    return storageType === 'session' ? 'sessionStorage' : 'localStorage'
  }

  return {
    setStorageType,
    getStorageType,
    setNameSpace,
    getStorageKey
  }
})()
