import { action } from 'typesafe-actions';

import { AppErrorType } from '../../globalTypes';
import { ActionTypes, RequestApi, ResponseApi } from './types';

export function actionCatVoteStoreRequest(data: RequestApi) {
  return action(ActionTypes.STORE_REQUEST, { data });
}

export function actionCatVoteStoreSuccess(data: ResponseApi) {
  return action(ActionTypes.STORE_SUCCESS, { data });
}

export function actionCatVoteStoreFailure(error: AppErrorType) {
  return action(ActionTypes.STORE_FAILURE, { error });
}
