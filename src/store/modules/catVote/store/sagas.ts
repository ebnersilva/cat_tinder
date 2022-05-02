import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { api } from '~/services/api';
import { handleResponseApi } from '~/utils/handleResponseApi';

import {
  actionCatVoteStoreRequest,
  actionCatVoteStoreSuccess,
  actionCatVoteStoreFailure,
} from './actions';
import { ActionTypes, ResponseApi } from './types';

type CatBreedIndexRequest = ReturnType<typeof actionCatVoteStoreRequest>;

export function* actionCatVoteStoreRequestApi({
  payload: {
    data: { image_id, value, sub_id },
  },
}: CatBreedIndexRequest) {
  try {
    const response: AxiosResponse<ResponseApi> = yield call(
      api.post,
      '/v1/votes',
      {
        image_id,
        value,
        sub_id,
      },
    );

    yield put(actionCatVoteStoreSuccess(response.data));
  } catch (err) {
    yield put(actionCatVoteStoreFailure(handleResponseApi(err)));
  }
}

export default all([
  takeLatest(ActionTypes.STORE_REQUEST, actionCatVoteStoreRequestApi),
]);
