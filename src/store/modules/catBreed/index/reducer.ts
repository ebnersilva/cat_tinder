import produce from 'immer';

import {
  ActionTypes,
  ICatBreedIndexState,
  ICatBreedIndexAction,
} from './types';

export const INITIAL_STATE: ICatBreedIndexState = {
  data: [],
  loading: false,
  error: '',
  page: 1,
  limit: 10,
  totalPages: 0,
};

const catBreedIndex = (
  state = INITIAL_STATE,
  action: ICatBreedIndexAction,
): ICatBreedIndexState => {
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

      case ActionTypes.SET_PAGE: {
        draft.page = action.payload.page;
        break;
      }

      case ActionTypes.SET_LIMIT: {
        draft.limit = action.payload.limit;
        break;
      }

      case ActionTypes.SET_TOTAL_PAGES: {
        draft.totalPages = action.payload.totalPages;
        break;
      }

      case ActionTypes.REMOVE_LAST_CAT: {
        const arrayRemovedLastCat = draft.data.slice(1);

        draft.data = arrayRemovedLastCat;
        break;
      }

      default:
        return draft;
    }
  });
};

export default catBreedIndex;
