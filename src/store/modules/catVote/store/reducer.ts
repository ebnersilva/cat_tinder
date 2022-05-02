import produce from 'immer';

import { ActionTypes, ICatVoteStoreState, ICatVoteStoreAction } from './types';

export const INITIAL_STATE: ICatVoteStoreState = {
  data: {
    message: '',
    id: 0,
  },
  loading: false,
  error: '',
};

const catVoteStore = (
  state = INITIAL_STATE,
  action: ICatVoteStoreAction,
): ICatVoteStoreState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.STORE_REQUEST: {
        draft.loading = true;
        break;
      }
      case ActionTypes.STORE_SUCCESS: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case ActionTypes.STORE_FAILURE: {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }

      default:
        return draft;
    }
  });
};

export default catVoteStore;
