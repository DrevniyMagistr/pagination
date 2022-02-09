const URL = 'https://api.opendota.com/api';

import { apiService } from './apiService';

export const getHeroesList = () => {
  return apiService(`${URL}/heroes`);
};
export const getHeroById = id => {
  return apiService(`${URL}/heroes/${id}`);
};
