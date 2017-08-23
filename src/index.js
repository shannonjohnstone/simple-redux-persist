import persistStore from './persistStore'
import saveStore from './saveStore'
import { storageType } from './utils'

const useLocalStorage = storageType.useLocalStorage

export {
  persistStore,
  saveStore,
  useLocalStorage
}
