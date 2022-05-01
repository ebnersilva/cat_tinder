import {
  actionExampleIndexFailure,
  actionExampleIndexRequest,
  actionExampleIndexSuccess,
} from '~/store/modules/example/index/actions';
import { ActionTypes } from '~/store/modules/example/index/types';

describe(`Redux Example - Index - Actions`, () => {
  it(`should be able to create an action with correct type to ${ActionTypes.INDEX_REQUEST} action`, () => {
    const expectedAction = {
      type: ActionTypes.INDEX_REQUEST,
    };

    expect(actionExampleIndexRequest({ id: 1 })).toEqual(expectedAction);
  });

  it(`should be able create an action with correct type to ${ActionTypes.INDEX_SUCCESS} action`, () => {
    const mockedReturn = [
      {
        id: 1,
        value: 'value',
      },
    ];

    const expectedAction = {
      type: ActionTypes.INDEX_SUCCESS,
      payload: {
        data: mockedReturn,
      },
    };

    expect(actionExampleIndexSuccess(mockedReturn)).toEqual(expectedAction);
  });

  it(`should be able create an action with correct type to ${ActionTypes.INDEX_FAILURE} action`, () => {
    const error = 'Some error';

    const expectedAction = {
      type: ActionTypes.INDEX_FAILURE,
      payload: {
        error,
      },
    };

    expect(actionExampleIndexFailure(error)).toEqual(expectedAction);
  });
});
