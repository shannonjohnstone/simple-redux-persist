import storageType from './storageType'
import { SESSION_STORAGE } from './constants'

export default () => {
  if (sessionStorage || localStorage) {
    const test = '__storagetest__'
    try {
      if (storageType.getStorageType() === SESSION_STORAGE) {
        sessionStorage.setItem(test, test)
        sessionStorage.removeItem(test)
      } else {
        localStorage.setItem(test, test)
        localStorage.removeItem(test)
      }
    } catch (e) {
      console.log('No storage for you!: ', e) // eslint-disable-line
      return false
    }
    return true
  }
  return false
}
