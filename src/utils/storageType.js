export default (() => {
  let storageType = 'session'
  console.log(storageType, 'storageTypeUtils invoked');

  function useLocalStorage() {
    storageType = 'local'
  }

  function getStorageType() {
    return storageType === 'session' ? 'sessionStorage' : 'localStorage'
  }

  return {
    useLocalStorage,
    getStorageType
  }
})()
