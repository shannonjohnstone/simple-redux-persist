import 'babel-polyfill'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { reducerInitStub } from './testUtils/constants'
import { storageType, storage } from '../src/utils'
import { FAKE_ACTION } from './testUtils/constants'
import { GET_ITEM, SET_ITEM, REMOVE_ITEM } from '../src/utils/constants'

const { expect } = chai
chai.use(sinonChai)
import { saveState } from '../src'

describe('saveState', () => {
  const action = { type: FAKE_ACTION }

  it('should pass the intercepted action to next - sessionStorage', () => {
    storage(REMOVE_ITEM)

    const nextArgs = []
    const fakeNext = sinon.spy()
    const fakeStore = { getState() { return reducerInitStub } }

    expect(storage(GET_ITEM)).equal(undefined)
    saveState(fakeStore)(fakeNext)(action)

    expect(fakeNext.withArgs(action)).calledOnce
    const value = storage(GET_ITEM)

    expect(value).equal(JSON.stringify(reducerInitStub))
  })
  it('should pass the intercepted action to next - localStorage', () => {
    storageType.useLocalStorage()
    storage(REMOVE_ITEM)

    const nextArgs = []
    const fakeNext = sinon.spy()
    const fakeStore = { getState() { return reducerInitStub } }

    expect(storage(GET_ITEM)).equal(undefined)
    saveState(fakeStore)(fakeNext)(action)

    expect(fakeNext.withArgs(action)).calledOnce
    const value = storage(GET_ITEM)

    expect(value).equal(JSON.stringify(reducerInitStub))
  })
})
