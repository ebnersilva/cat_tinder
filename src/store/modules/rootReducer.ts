import { combineReducers } from 'redux';
import catBreedIndex from '~/store/modules/catBreed/index/reducer';
import catVoteStore from '~/store/modules/catVote/store/reducer';
import { IStoreState } from '..';

const appReducers = combineReducers<IStoreState>({
  catBreedIndex,
  catVoteStore,
});

export default appReducers;
