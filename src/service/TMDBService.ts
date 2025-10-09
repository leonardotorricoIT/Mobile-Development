import axios from 'axios';
import { TMDB_BASE_URL, TMDB_API_KEY } from '@env';

const api = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: 'en-US',
  },
});

export const getPopularMovies = async (page: number = 1) => {
  try {
    const response = await api.get('/movie/popular', {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
