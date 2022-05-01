import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { api } from '~/services/api';
import { handleResponseApi } from '~/utils/handleResponseApi';

import {
  actionExampleIndexSuccess,
  actionExampleIndexFailure,
} from './actions';
import { ActionTypes, IExampleResponseApi } from './types';

export function* actionExampleIndexRequestApi() {
  try {
    const response: AxiosResponse<IExampleResponseApi> = yield call(
      api.get,
      '/users',
    );

    yield put(actionExampleIndexSuccess(response.data));
  } catch (err) {
    yield put(actionExampleIndexFailure(handleResponseApi(err)));
  }
}

export default all([
  takeLatest(ActionTypes.INDEX_REQUEST, actionExampleIndexRequestApi),
]);
