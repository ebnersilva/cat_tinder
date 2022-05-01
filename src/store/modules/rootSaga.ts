import { all } from 'redux-saga/effects';

import exampleIndex from '~/store/modules/example/index/sagas';

export default function* rootSaga() {
  return yield all([exampleIndex]);
}
