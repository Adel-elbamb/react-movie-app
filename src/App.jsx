// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import MoviesList from './pages/MoviesList/MoviesList'

const App = () => {
  const movieId =497698
  // const movieId =100

  ;

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
    </div>
  );
};

export default App;
