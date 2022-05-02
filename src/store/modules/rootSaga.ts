import { all } from 'redux-saga/effects';

import catBreedIndex from '~/store/modules/catBreed/index/sagas';
import catVoteStore from '~/store/modules/catVote/store/sagas';

export default function* rootSaga() {
  return yield all([catBreedIndex, catVoteStore]);
}
