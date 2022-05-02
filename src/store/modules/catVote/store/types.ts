import { ActionType } from 'typesafe-actions';

import { AppErrorType } from '~/store/modules/globalTypes';
import * as actions from './actions';

export type ICatVoteStoreAction = ActionType<typeof actions>;

export enum ActionTypes {
  STORE_REQUEST = '@CAT_VOTE_STORE/REQUEST',
  STORE_SUCCESS = '@CAT_VOTE_STORE/SUCCESS',
  STORE_FAILURE = '@CAT_VOTE_STORE/FAILURE',
}

export interface RequestApi {
  image_id: string;
  sub_id?: string;
  value: number;
}

export interface ResponseApi {
  message: string;
  id: number;
}

export interface ICatVoteStoreState {
  data: ResponseApi;
  loading: boolean;
  error: AppErrorType;
}
