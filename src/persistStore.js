import { checkForStorage, storage } from './utils'
import { RETRIEVE_STATE } from './utils/constants'

export default (store) => {
  const value = storage('getItem')
  if (checkForStorage()) {
    const retrievedState = JSON.parse(value)
    store.dispatch({ type: RETRIEVE_STATE, payload: retrievedState })
  }
  return store
}
