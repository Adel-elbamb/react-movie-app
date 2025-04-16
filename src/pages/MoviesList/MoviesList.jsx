// import React, { useState, useEffect } from 'react';
// import { useAppContext } from '../context/AppContext';
// import { getNowPlayingMovies } from '../services/tmdbService';
// import MovieCard from '../components/MovieCard';
// import Pagination from '../components/Pagination';
// import { useSearchParams } from 'react-router-dom';
// import styles from './MoviesList.module.css';

// const MoviesList = () => {
//   const { state } = useAppContext();
//   const [movies, setMovies] = useState([]);
//   const [searchParams] = useSearchParams();
//   const page = parseInt(searchParams.get('page') || '1');

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const data = await getNowPlayingMovies(page, state.language);
//       setMovies(data);
//     };
//     fetchMovies();
//   }, [page, state.language]);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Now Playing</h1>
//       <div className="row row-cols-1 row-cols-md-4 g-4">
//         {movies.map((movie) => (
//           <div key={movie.id} className="col">
//             <MovieCard item={movie} itemType="movie" />
//           </div>
//         ))}
//       </div>
//       <Pagination currentPage={page} totalPages={5} />
//     </div>
//   );
// };

// export default MoviesList;





import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } from '../../store/actions/moviesActions';
import { setLanguage } from '../../store/actions/languageActions';
import styles from './MoviesList.module.css';

// Hardcode API constants
const TMDB_API_KEY = 'e0dd7fb1ec73d693e8c236644b38dc1f';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const { language } = useSelector((state) => state.language);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(fetchMoviesStart());
      try {
        const response = await axios.get(`${TMDB_BASE_URL}/movie/now_playing`, {
          params: {
            api_key: TMDB_API_KEY,
            page,
            language,
          },
        });
        dispatch(fetchMoviesSuccess(response.data.results));
      } catch (err) {
        dispatch(fetchMoviesFailure('Failed to fetch movies. Please try again later.'));
      }
    };
    fetchMovies();
  }, [dispatch, page, language]);

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className={styles.container}>
      <div className="mb-4">
        <select onChange={handleLanguageChange} value={language} className="p-2 rounded">
          <option value="en">EN</option>
          <option value="ar">AR</option>
          <option value="fr">FR</option>
          <option value="zh">ZH</option>
        </select>
      </div>

      <h1 className={styles.heading}>Now Playing</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            <MovieCard item={movie} itemType="movie" />
          </div>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={5} />
    </div>
  );
};

export default MoviesList;