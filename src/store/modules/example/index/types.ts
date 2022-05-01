import { ActionType } from 'typesafe-actions';

import { AppErrorType } from '~/store/modules/globalTypes';
import * as actions from './actions';

export type IExampleIndexAction = ActionType<typeof actions>;

export enum ActionTypes {
  INDEX_REQUEST = '@EXAMPLE_INDEX/REQUEST',
  INDEX_SUCCESS = '@EXAMPLE_INDEX/SUCCESS',
  INDEX_FAILURE = '@EXAMPLE_INDEX/FAILURE',
}

export interface IExample {
  id: number;
  value: string;
}

export interface IExampleRequestApi {
  id: number;
}

export type IExampleResponseApi = IExample[];

export interface IExampleIndexState {
  data: IExampleResponseApi;
  loading: boolean;
  error: AppErrorType;
}
