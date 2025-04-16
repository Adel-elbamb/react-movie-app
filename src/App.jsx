// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// import MovieDetails from './pages/MovieDetails/MovieDetails';
// import MoviesList from './pages/MoviesList/MoviesList'
// import TVShowDetails from './pages/TvShowsDetails/TvShowsDetails';
import { lazy } from "react";
 
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const MoviesList = lazy(() => import('./pages/MoviesList/MoviesList'));
const TVShowDetails = lazy(() => import('./pages/TvShowsDetails/TvShowsDetails'));

 
const App = () => {
  return (
   <>
   
   <Router>
       <Routes>
       <Route path="/" element={<MoviesList/>} />
       <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVShowDetails />} />
       </Routes>
    </Router>
   </>
  );
};

export default App;
