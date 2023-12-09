import {
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import {thunk} from 'redux-thunk';

import bookmarksReducer from './Reducers.js';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, bookmarksReducer)


  let store = legacy_createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  
export {store , persistor}

