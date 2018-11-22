import { REDUX_LOCAL_STORAGE_PREFIX , SESSION_STORAGE, LOCAL_STORAGE} from './constants'

export default {
  // Properties
  type: 'session',
  key: REDUX_LOCAL_STORAGE_PREFIX,
  // Methods
  setType: function(type) {
    this.type = type
    console.log(`${this.type} storageTypeUtils invoked`);
  },
  getType: function(type) {
    this.type = type
  },
  setKey: function(namespace) {
    this.key = `${REDUX_LOCAL_STORAGE_PREFIX}-${namespace}`
  },
  getKey: function() {
    return this.key
  },
  getStorage: function() {
    return this.type === 'session' ? sessionStorage : localStorage
  },
}