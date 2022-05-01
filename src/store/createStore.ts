import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';

import { IStoreState } from '~/store';

export default (reducers: Reducer<IStoreState>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
