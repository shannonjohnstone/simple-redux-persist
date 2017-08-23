import persistStore from './persistStore'
import saveState from './saveState'
import { storageType } from './utils'

const useLocalStorage = storageType.useLocalStorage

export {
  persistStore,
  saveState,
  useLocalStorage
}
