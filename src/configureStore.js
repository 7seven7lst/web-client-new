import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import storage from 'localforage';
import rootReducer from './modules';

const persistConfig = {
  key: 'auth',
  storage,
};

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
    autoRehydrate(),
  );

  persistStore(store, persistConfig);
  return store;
};

export default configureStore;
