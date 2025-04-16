import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  language: languageReducer,
  // Other reducers (e.g., wishlist, movieDetails) are omitted for your part
});

export default rootReducer;