# simple-redux-persist

**Redux** persist package that can be used for persisting (saving) the current state of a react application using **Redux** as state management

This package can be used with the following browser storage;

- sessionStorage
- localStorage

### Configuration

There is two configuration points for setting up this package, your store and the location you import your store

**Store configuration using sessionStorage**

```js
import { saveState, persistStore } from 'simple-redux-persist'

function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware(saveState)] //
  const store = { ...createStore(rootReducer, initialState, compose(...enhancers)) }
  return store
}

export default persistStore(configureStore())
```

**Store configuration using localStorage**

```js
import { saveState, persistStore, useLocalStorage } from 'simple-redux-persist'

useLocalStorage()

function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware(saveState)] //
  const store = { ...createStore(rootReducer, initialState, compose(...enhancers)) }
  return store
}

export default persistStore(configureStore())
```

By default this package is setup to use `sessionStorage` but if you would like to use `localStorage` it is as simple as using the second example above. The only difference to the `sessionStorage` example is your call the `useLocalStorage()`

**Importing your store**

```js
import configureStore from './store'
const store = configureStore
```

You will notice in the above example you are not invoke `configureStore` in this location as that is done back when we export the `persistStore(configureStore())` in your store configuration
