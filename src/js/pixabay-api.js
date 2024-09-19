const API_KEY = '45963694-b66337efb933bcb9eea43ec6d';
const BASE_URL = 'https://pixabay.com/api/';

import axios from 'axios';
export async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
