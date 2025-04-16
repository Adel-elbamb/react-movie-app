// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import MovieDetails from './pages/MovieDetails/MovieDetails';

const App = () => {
  const movieId =497698
  // const movieId =100

  ;

  return (
    <div className="App">
      <MovieDetails movieId={movieId} />
    </div>
  );
};

export default App;
