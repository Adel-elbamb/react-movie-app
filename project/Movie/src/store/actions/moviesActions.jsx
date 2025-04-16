export const fetchMoviesStart = () => ({
    type: 'FETCH_MOVIES_START',
  });
  
  export const fetchMoviesSuccess = (movies) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies,
  });
  
  export const fetchMoviesFailure = (error) => ({
    type: 'FETCH_MOVIES_FAILURE',
    payload: error,
  });