import { ActionType } from 'typesafe-actions';

import { AppErrorType } from '~/store/modules/globalTypes';
import * as actions from './actions';

export type ICatBreedIndexAction = ActionType<typeof actions>;

export enum ActionTypes {
  INDEX_REQUEST = '@CAT_BREED_INDEX/REQUEST',
  INDEX_SUCCESS = '@CAT_BREED_INDEX/SUCCESS',
  INDEX_FAILURE = '@CAT_BREED_INDEX/FAILURE',
  SET_PAGE = '@CAT_BREED_INDEX/SET_PAGE',
  SET_LIMIT = '@CAT_BREED_INDEX/SET_LIMIT',
  SET_TOTAL_PAGES = '@CAT_BREED_INDEX/SET_TOTAL_PAGES',
  REMOVE_LAST_CAT = '@CAT_BREED_INDEX/REMOVE_LAST_CAT',
}

export interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface CatBreed {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url?: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  image?: Image;
  indoor: number;
  intelligence: number;
  lap?: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url?: string;
  vetstreet_url?: string;
  vocalisation: number;
  weight: Weight;
  wikipedia_url: string;
}

export interface RequestApi {
  page: number;
  limit: number;
}

export type ResponseApi = CatBreed[];

export interface ICatBreedIndexState {
  data: ResponseApi;
  loading: boolean;
  error: AppErrorType;
  page: number;
  limit: number;
  totalPages: number;
}
