import axios from 'axios';

import { BASE_URL, AUTHORIZATION_TOKEN } from '@env';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async config => {
  try {
    if (AUTHORIZATION_TOKEN) {
      config.headers['x-api-key'] = AUTHORIZATION_TOKEN;
    }

    return config;
  } catch (err) {
    return err;
  }
});

export default api;
