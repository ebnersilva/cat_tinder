import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { api } from '~/services/api';
import { handleResponseApi } from '~/utils/handleResponseApi';

import {
  actionCatBreedIndexRequest,
  actionCatBreedIndexFailure,
  actionCatBreedIndexSuccess,
  actionSetPage,
  actionSetLimit,
  actionSetTotalPages,
} from './actions';
import { ActionTypes, ResponseApi } from './types';

type CatBreedIndexRequest = ReturnType<typeof actionCatBreedIndexRequest>;

export function* actionCatBreedIndexRequestApi({
  payload: { page, limit },
}: CatBreedIndexRequest) {
  try {
    const response: AxiosResponse<ResponseApi> = yield call(
      api.get,
      '/v1/breeds',
      {
        params: {
          limit,
          page,
        },
      },
    );

    const totalPages = Math.floor(
      Number(response.headers['pagination-count']) / limit,
    );

    yield put(actionSetPage(page));
    yield put(actionSetLimit(limit));
    yield put(actionSetTotalPages(totalPages));

    yield put(actionCatBreedIndexSuccess(response.data));
  } catch (err) {
    yield put(actionCatBreedIndexFailure(handleResponseApi(err)));
  }
}

export default all([
  takeLatest(ActionTypes.INDEX_REQUEST, actionCatBreedIndexRequestApi),
]);
