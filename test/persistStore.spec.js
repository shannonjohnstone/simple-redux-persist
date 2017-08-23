import 'babel-polyfill'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { reducerInitStub } from './testUtils/constants'
import { GET_ITEM, SET_ITEM } from '../src/utils/constants'
import { storageType, storage } from '../src/utils'

const { expect } = chai
chai.use(sinonChai)
import { persistStore } from '../src'

describe('persistStore', () => {
  it('first action with payload - sessionStorage', () => {
    const fakeStore = { getState() { return reducerInitStub }, dispatch: sinon.spy() }

    storage(SET_ITEM, JSON.stringify(reducerInitStub))
    expect(storage(GET_ITEM)).to.deep.equal(JSON.stringify(reducerInitStub))

    const store = persistStore(fakeStore)
    expect(store.dispatch).calledOnce
  })
  it('first action with payload - localStorage', () => {
    storageType.useLocalStorage()

    const fakeStore = { getState() { return reducerInitStub }, dispatch: sinon.spy() }

    storage(SET_ITEM, JSON.stringify(reducerInitStub))

    expect(storage(GET_ITEM)).to.deep.equal(JSON.stringify(reducerInitStub))

    const store = persistStore(fakeStore)
    expect(store.dispatch).calledOnce
  })
})
