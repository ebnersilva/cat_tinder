import produce from 'immer';

import { ActionTypes, IExampleIndexState, IExampleIndexAction } from './types';

export const INITIAL_STATE: IExampleIndexState = {
  data: [],
  loading: false,
  error: '',
};

const banks = (
  state = INITIAL_STATE,
  action: IExampleIndexAction,
): IExampleIndexState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.INDEX_REQUEST: {
        draft.loading = true;
        break;
      }
      case ActionTypes.INDEX_SUCCESS: {
        draft.loading = false;

        draft.data = action.payload.data;

        break;
      }
      case ActionTypes.INDEX_FAILURE: {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }

      default:
        return draft;
    }
  });
};

export default banks;
