import {
  actionCatBreedIndexFailure,
  actionCatBreedIndexRequest,
  actionCatBreedIndexSuccess,
  actionSetLimit,
  actionSetPage,
  actionSetTotalPages,
  actionRemoveLastCat,
} from '~/store/modules/catBreed/index/actions';
import { ActionTypes } from '~/store/modules/catBreed/index/types';

describe(`Redux Example - Index - Actions`, () => {
  it(`should be able to create an action with correct type to ${ActionTypes.INDEX_REQUEST} action`, () => {
    const expectedAction = {
      type: ActionTypes.INDEX_REQUEST,
      payload: {
        limit: 1,
        page: 1,
      },
    };

    expect(actionCatBreedIndexRequest({ limit: 1, page: 1 })).toEqual(
      expectedAction,
    );
  });

  it(`should be able create an action with correct type to ${ActionTypes.INDEX_SUCCESS} action`, () => {
    const mockedReturn = [
      {
        weight: {
          imperial: '7  -  10',
          metric: '3 - 5',
        },
        id: 'abys',
        name: 'Abyssinian',
        cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
        vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian',
        temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
        origin: 'Egypt',
        country_codes: 'EG',
        country_code: 'EG',
        description:
          'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
        life_span: '14 - 15',
        indoor: 0,
        lap: 1,
        alt_names: '',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 3,
        dog_friendly: 4,
        energy_level: 5,
        grooming: 1,
        health_issues: 2,
        intelligence: 5,
        shedding_level: 2,
        social_needs: 5,
        stranger_friendly: 5,
        vocalisation: 1,
        experimental: 0,
        hairless: 0,
        natural: 1,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
        hypoallergenic: 0,
        reference_image_id: '0XYvRd7oD',
        image: {
          id: '0XYvRd7oD',
          width: 1204,
          height: 1445,
          url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
        },
      },
    ];

    const expectedAction = {
      type: ActionTypes.INDEX_SUCCESS,
      payload: {
        data: mockedReturn,
      },
    };

    expect(actionCatBreedIndexSuccess(mockedReturn)).toEqual(expectedAction);
  });

  it(`should be able create an action with correct type to ${ActionTypes.INDEX_FAILURE} action`, () => {
    const error = 'Some error';

    const expectedAction = {
      type: ActionTypes.INDEX_FAILURE,
      payload: {
        error,
      },
    };

    expect(actionCatBreedIndexFailure(error)).toEqual(expectedAction);
  });

  it(`should be able create an action with correct type to ${ActionTypes.SET_LIMIT} action`, () => {
    const expectedAction = {
      type: ActionTypes.SET_LIMIT,
      payload: {
        limit: 1,
      },
    };

    expect(actionSetLimit(1)).toEqual(expectedAction);
  });

  it(`should be able create an action with correct type to ${ActionTypes.SET_PAGE} action`, () => {
    const expectedAction = {
      type: ActionTypes.SET_PAGE,
      payload: {
        page: 1,
      },
    };

    expect(actionSetPage(1)).toEqual(expectedAction);
  });

  it(`should be able create an action with correct type to ${ActionTypes.SET_TOTAL_PAGES} action`, () => {
    const expectedAction = {
      type: ActionTypes.SET_TOTAL_PAGES,
      payload: {
        totalPages: 1,
      },
    };

    expect(actionSetTotalPages(1)).toEqual(expectedAction);
  });

  it(`should be able create an action with correct type to ${ActionTypes.REMOVE_LAST_CAT} action`, () => {
    const expectedAction = {
      type: ActionTypes.REMOVE_LAST_CAT,
    };

    expect(actionRemoveLastCat()).toEqual(expectedAction);
  });
});
