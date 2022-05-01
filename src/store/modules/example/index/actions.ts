import { action } from 'typesafe-actions';

import { AppErrorType } from '../../globalTypes';
import { ActionTypes, IExampleRequestApi, IExampleResponseApi } from './types';

export function actionExampleIndexRequest(data: IExampleRequestApi) {
  return action(ActionTypes.INDEX_REQUEST);
}

export function actionExampleIndexSuccess(data: IExampleResponseApi) {
  return action(ActionTypes.INDEX_SUCCESS, { data });
}

export function actionExampleIndexFailure(error: AppErrorType) {
  return action(ActionTypes.INDEX_FAILURE, { error });
}
