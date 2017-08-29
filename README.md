# simple-redux-persist

**Simple Redux Persist** is a package that can persist (save) the current state of a **Redux** application.

This package can be used with the following browser storage;

- sessionStorage
- localStorage

### Store Configuration

There is two configuration options, either sessionStorage or localStorage.

By default this package is setup to use `sessionStorage` but if you would like to use `localStorage` it is as simple as using the second example above. The only difference to the `sessionStorage` example is your call the `useLocalStorage()`

**Store configuration using sessionStorage**

```js
import { saveStore, persistStore } from 'simple-redux-persist'

function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware(saveStore)] //
  const store = { ...createStore(rootReducer, initialState, compose(...enhancers)) }
  return store
}

export default () => persistStore(configureStore())
```

**Store configuration using localStorage**

When wanting to use `localStorage` you can you the `useLocalStorage` method to set that option and doing so you can also pass in a unique prefix if you would like.

```js
useLocalStorage('unique-prefix') // with prefix -> redux-local-storage-unique-prefix
useLocalStorage() // without prefix -> redux-local-storage
```

```js
import { saveStore, persistStore, useLocalStorage } from 'simple-redux-persist'

useLocalStorage()

function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware(saveStore)]
  const store = { ...createStore(rootReducer, initialState, compose(...enhancers)) }
  return store
}

export default () => persistStore(configureStore())
```

### Reducer Configuration
When configuring your redux reducer to work with this package you need to add a check for when the store is retrieved from your desired storage and feed back into the store.

In your root reducer file you will need to setup a switch statement that looks for the desired action.

That action is `RETRIEVE_STATE`, this action is dispatched when the package finds a stored object in storage and loads it back into the redux.

```js
import { combineReducers } from 'redux'
import reducer1 from './reducer1'
import reducer2 from './reducer2'

const appReducer = combineReducers({
  reducer1,
  reducer2
})

const rootReducer = (state, action) => {
  let newState
  switch (action.type) {
    case 'RETRIEVE_STATE': {
      newState = { ...action.payload }
      break
    }
    default: {
      newState = state
      break
    }
  }
  return appReducer(newState, action)
}

export default rootReducer
```
