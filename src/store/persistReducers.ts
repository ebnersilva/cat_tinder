import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';

import { IStoreState } from '~/store';

export default (reducers: Reducer<IStoreState>) => {
  const persistedReducer = persistReducer(
    {
      key: 'tinder_cat',
      storage: AsyncStorage,
      whitelist: [],
    },
    reducers,
  );

  return persistedReducer;
};
