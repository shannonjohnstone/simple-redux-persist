class StorageMock {
  constructor() { this.store = {} }
  removeItem(key) { delete this.store[key] }
  getItem(key) { return this.store[key] }
  setItem(key, value) { this.store[key] = value }
}

export default StorageMock
