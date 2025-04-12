// src/App.jsx
import React from 'react';
import MovieDetails from './pages/MovieDetails/MovieDetails';

const App = () => {
  const movieId =497698
  ;

  return (
    <div className="App">
      <MovieDetails movieId={movieId} />
    </div>
  );
};

export default App;
