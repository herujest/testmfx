import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
  Reducer,
} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, PersistState, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import app from './reducers';
import {MainInitialStateType} from './reducers/main';

interface MyState {
  main: MainInitialStateType;
}

const mergedReducer: Reducer<MyState, AnyAction> = combineReducers({...app});
export type RootState = ReturnType<typeof mergedReducer> & {
  _persist: PersistState;
};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
  whitelist: ['auth', 'main'],
  timeout: 0,
};

const pReducers = persistReducer<RootState>(persistConfig, mergedReducer);

const store = createStore(
  pReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);

export {store, persistor};
