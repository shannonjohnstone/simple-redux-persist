import storageType from './storageType'
import { REDUX_SESSION_STORAGE, REDUX_LOCAL_STORAGE } from './constants'

export default function (action, value) {
  const type = storageType.getStorageType()
  switch (action) {
    case 'setItem':
      if (type === 'sessionStorage') sessionStorage.setItem(REDUX_SESSION_STORAGE, value)
      else localStorage.setItem(REDUX_LOCAL_STORAGE, value)
      break
    case 'getItem':
      if (type === 'sessionStorage') return sessionStorage.getItem(REDUX_SESSION_STORAGE)
      else return localStorage.getItem(REDUX_LOCAL_STORAGE)
      break
    case 'removeItem':
      if (type === 'sessionStorage') sessionStorage.removeItem(REDUX_SESSION_STORAGE)
      else localStorage.removeItem(REDUX_LOCAL_STORAGE)
      break
    default:
      break
  }
}
