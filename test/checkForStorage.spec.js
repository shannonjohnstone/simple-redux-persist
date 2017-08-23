import 'babel-polyfill'
import { expect } from 'chai'
import checkForStorage from '../src/utils/checkForStorage'
import StorageMock from './testUtils/storageMock'

describe('Check sessionStorage exists', () => {
  before(() => {
    global.sessionStorage = new StorageMock()
    global.localStorage = new StorageMock()
  })
  it('should be true', () => {
    const value = checkForStorage()
    expect(value).equal(true)
  })
})
