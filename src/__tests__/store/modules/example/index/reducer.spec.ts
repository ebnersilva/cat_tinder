import {
  actionExampleIndexRequest,
  actionExampleIndexFailure,
  actionExampleIndexSuccess,
} from '~/store/modules/example/index/actions';
import reducer, { INITIAL_STATE } from '~/store/modules/example/index/reducer';
import { ActionTypes } from '~/store/modules/example/index/types';

describe(`Redux Example - Index - Reducers`, () => {
  it(`should handle ${ActionTypes.INDEX_REQUEST} action`, () => {
    expect(
      reducer(INITIAL_STATE, actionExampleIndexRequest({ id: 1 })),
    ).toEqual({
      ...INITIAL_STATE,
      loading: true,
    });
  });

  it(`should handle ${ActionTypes.INDEX_SUCCESS} action`, () => {
    const mockedData = [
      {
        id: 1,
        value: 'Some value',
      },
    ];

    expect(
      reducer(INITIAL_STATE, actionExampleIndexSuccess(mockedData)),
    ).toEqual({
      ...INITIAL_STATE,
      data: mockedData,
    });
  });

  it(`should handle ${ActionTypes.INDEX_FAILURE} action`, () => {
    const error = 'Test Failure';

    expect(reducer(INITIAL_STATE, actionExampleIndexFailure(error))).toEqual({
      ...INITIAL_STATE,
      error,
    });
  });
});
