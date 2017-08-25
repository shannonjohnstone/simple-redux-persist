# simple-redux-persist

**Redux** persist package that can be used for persisting (saving) the current state of a react application using **Redux** as state management

This package can be used with the following browser storage;

- sessionStorage
- localStorage

### Configuration

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
  const enhancers = [applyMiddleware(saveStore)] //
  const store = { ...createStore(rootReducer, initialState, compose(...enhancers)) }
  return store
}

export default () => persistStore(configureStore())
```
