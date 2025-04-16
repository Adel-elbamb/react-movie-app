// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import MovieDetails from './pages/MovieDetails/MovieDetails';
import TVShowDetails from './pages/TvShowsDetails/TvShowsDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVShowDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
