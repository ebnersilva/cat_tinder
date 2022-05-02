import { createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { ICatBreedIndexState } from './modules/catBreed/index/types';
import { ICatVoteStoreState } from './modules/catVote/store/types';

export interface IStoreState {
  catBreedIndex: ICatBreedIndexState;
  catVoteStore: ICatVoteStoreState;
}

let sagaMonitor;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares: Middleware[] = [sagaMiddleware];
const enhancer = applyMiddleware(...middlewares);

const store = createStore(persistReducers(rootReducer), enhancer);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
