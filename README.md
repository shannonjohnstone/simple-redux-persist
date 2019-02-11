# simple-redux-persist

**Simple Redux Persist** is a package that can persist (save) the current state of a **Redux** application.

This package can be used with the following browser storage;

- sessionStorage
- localStorage

### Store Configuration

There is two configuration options, either sessionStorage or localStorage.

By default this package is setup to use `sessionStorage` but if you would like to use `localStorage` you can also do so. More info in the second example.

**sessionStorage versus localStorage**

- `sessionStorage`: the stored item is only stored for as long as application is open and once it's closed the stored item is removed
- `localStorage`: the stored item is kept until it it's manually removed, no matter if the tab or window is closed

**Store configuration using sessionStorage**

```js
import { saveStore, persistStore } from 'simple-redux-persist'

function configureStore(initialState = {}) {
  const saveStoreMiddleware = saveStore({ namepsace: 'my-app' })
  const enhancers = [applyMiddleware(saveStoreMiddleware)] //
  const store = { ...createStore(rootReducer, initialState, compose(...enhancers)) }
  return store
}

export default () => persistStore(configureStore())
```

**Store configuration using localStorage**

When wanting to use `localStorage` change type to `local`

```js
import { saveStore, persistStore } from 'simple-redux-persist'

function configureStore(initialState = {}) {
  const saveStoreMiddleware = saveStore({ namepsace: 'my-app', type: 'local' })
    const enhancers = [applyMiddleware(saveStoreMiddleware)]
    const store = { ...createStore(rootReducer, initialState, compose(...enhancers)) }
    return store
  }
}

export default () => persistStore(configureStore())
```

### Reducer Configuration
When configuring your redux reducer to work with this package you need to add a check for when the store is retrieved from your desired storage to load back into the store.

In your root reducer file you will need to setup a switch statement that looks for the desired action (if you do not already have one in place).

That action is `RETRIEVE_STATE`, this action is dispatched when the package retrieves a stored object from storage and loads it back into the redux store.

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
