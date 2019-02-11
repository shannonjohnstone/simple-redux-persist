import storageType from './storageType'
import { SESSION_STORAGE } from './constants'

export default () => {
  if (sessionStorage || localStorage) {
    const test = '__storagetest__'
    try {
      const storage = storageType.getStorage() 
      storage.setItem(test, test)
      storage.removeItem(test)
    } catch (e) {
      console.log('No storage for you!: ', e) // eslint-disable-line
      return false
    }
    return true
  }
  return false
}
