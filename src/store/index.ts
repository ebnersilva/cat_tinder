import Reactotron from 'reactotron-react-native';
import { createStore, applyMiddleware, Middleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import ReactotronConfig from '~/config/reactotronConfig';

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

if (__DEV__) {
  sagaMonitor = Reactotron.createSagaMonitor!();
}

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares: Middleware[] = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...middlewares),
        ReactotronConfig.createEnhancer!(),
      )
    : applyMiddleware(...middlewares);
// const enhancer = applyMiddleware(...middlewares);

const store = createStore(persistReducers(rootReducer), enhancer);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
