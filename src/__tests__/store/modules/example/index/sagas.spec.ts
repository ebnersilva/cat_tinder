import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { put } from 'redux-saga/effects';

import { actionExampleIndexRequestApi } from '~/store/modules/example/index/sagas';
import { ActionTypes } from '~/store/modules/example/index/types';

const axiosMock = new MockAdapter(axios);

axiosMock.onGet('/users').reply(200, {
  data: [
    {
      id: 1,
      value: '1',
    },
  ],
});

describe('Redux Example - Index - Sagas', () => {
  it(`should dispatch request to api from ${ActionTypes.INDEX_REQUEST} action with result from api`, async () => {
    const generator = actionExampleIndexRequestApi();
    generator.next();

    const response = await axios.get('/users');

    expect(generator.next(response.data).value).toEqual(
      put({ type: ActionTypes.INDEX_SUCCESS, payload: response.data }),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
