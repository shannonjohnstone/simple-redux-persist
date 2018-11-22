import storageType from './storageType'

export default function (action, value) {
  const storage = storageType.getStorage()
  const key = storageType.getKey()
  switch (action) {
    case 'setItem':
      return storage.setItem(key, value)
    case 'getItem':
      return storage.getItem(key)
    case 'removeItem':
      return storage.removeItem(key)
    default:
      return
  }
}
