import { action } from 'typesafe-actions';

import { AppErrorType } from '../../globalTypes';
import { ActionTypes, RequestApi, ResponseApi } from './types';

export function actionCatBreedIndexRequest({ limit, page }: RequestApi) {
  return action(ActionTypes.INDEX_REQUEST, { limit, page });
}

export function actionCatBreedIndexSuccess(data: ResponseApi) {
  return action(ActionTypes.INDEX_SUCCESS, { data });
}

export function actionCatBreedIndexFailure(error: AppErrorType) {
  return action(ActionTypes.INDEX_FAILURE, { error });
}

export function actionSetPage(page: number) {
  return action(ActionTypes.SET_PAGE, { page });
}

export function actionSetLimit(limit: number) {
  return action(ActionTypes.SET_LIMIT, { limit });
}

export function actionSetTotalPages(totalPages: number) {
  return action(ActionTypes.SET_TOTAL_PAGES, { totalPages });
}

export function actionRemoveLastCat() {
  return action(ActionTypes.REMOVE_LAST_CAT);
}
