import { client } from '../utils/httpClient';

export const getShows = (query: string) => {
  return client.get(`/search/shows?q=${query}`);
};

export const getShow = (showId?: string) => {
  return client.get(`/shows/${showId}`);
};