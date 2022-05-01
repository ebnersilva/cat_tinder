import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const jestReactNavigation = jest.requireActual('@react-navigation/native');
  return {
    ...jestReactNavigation,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
