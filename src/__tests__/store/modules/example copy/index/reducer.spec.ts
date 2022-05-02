import {
  actionCatBreedIndexRequest,
  actionCatBreedIndexFailure,
  actionCatBreedIndexSuccess,
} from '~/store/modules/catBreed/index/actions';
import reducer, { INITIAL_STATE } from '~/store/modules/catBreed/index/reducer';
import { ActionTypes } from '~/store/modules/catBreed/index/types';

describe(`Redux Example - Index - Reducers`, () => {
  it(`should handle ${ActionTypes.INDEX_REQUEST} action`, () => {
    expect(
      reducer(INITIAL_STATE, actionCatBreedIndexRequest({ page: 1, limit: 1 })),
    ).toEqual({
      ...INITIAL_STATE,
      loading: true,
    });
  });

  it(`should handle ${ActionTypes.INDEX_SUCCESS} action`, () => {
    const mockedData = [
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

    expect(
      reducer(INITIAL_STATE, actionCatBreedIndexSuccess(mockedData)),
    ).toEqual({
      ...INITIAL_STATE,
      data: mockedData,
    });
  });

  it(`should handle ${ActionTypes.INDEX_FAILURE} action`, () => {
    const error = 'Test Failure';

    expect(reducer(INITIAL_STATE, actionCatBreedIndexFailure(error))).toEqual({
      ...INITIAL_STATE,
      error,
    });
  });
});
