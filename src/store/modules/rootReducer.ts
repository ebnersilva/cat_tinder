import { combineReducers } from 'redux';
import exampleIndex from '~/store/modules/example/index/reducer';
import { IStoreState } from '..';

const appReducers = combineReducers<IStoreState>({
  exampleIndex,
});

export default appReducers;
