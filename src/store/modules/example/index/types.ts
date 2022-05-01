import { ActionType } from 'typesafe-actions';

import { AppErrorType } from '~/store/modules/globalTypes';
import * as actions from './actions';

export type IExampleIndexAction = ActionType<typeof actions>;

export enum ActionTypes {
  INDEX_REQUEST = '@EXAMPLE_INDEX/REQUEST',
  INDEX_SUCCESS = '@EXAMPLE_INDEX/SUCCESS',
  INDEX_FAILURE = '@EXAMPLE_INDEX/FAILURE',
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
  cfa_url: string;
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
  image: Image;
  indoor: number;
  intelligence: number;
  lap: number;
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
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: Weight;
  wikipedia_url: string;
}
export interface IExample {
  id: number;
  value: string;
}

export interface IExampleRequestApi {
  id: number;
}

export type IExampleResponseApi = IExample[];

export interface IExampleIndexState {
  data: IExampleResponseApi;
  loading: boolean;
  error: AppErrorType;
}
