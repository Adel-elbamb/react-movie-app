import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recommendations from '../recommendations/recommendations';
import Reviews from '../reviews/reviews';
import { Rating } from 'primereact/rating';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styles from "./MovieDetails.module.css"




const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e0dd7fb1ec73d693e8c236644b38dc1f`)
      .then(result => setMovie(result.data))
      .catch(error => console.error("error", error));
  }, [movieId]);

  return (
    <div className={styles.container}>
      {movie && (
        <div className={styles.card}>
          <div className={styles.imgContainer} >
           <img className={styles.movieImage}  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  />
          </div>
          <div className={styles.cardDetails}>
            <h1 className={styles.h1}>{movie.title}</h1>
            <span className={styles.span}> {new Date(movie.release_date).toLocaleDateString()}</span>


            <p className= {styles.ratingStar}>
            <Rating value={movie.vote_average/2} readOnly cancel={false} />
          </p>

            <p className={styles.overView}>{movie.overview}</p>

            <div className={styles.genresContainer}>
            {movie.genres.map((genre)=> (
              <div key={genre.id} className={styles.genreItem}>
                {genre.name}
              </div>
            ))}
          </div>

            <div className={styles.detailsFooter}>
              <p ><strong>Duration:</strong>{movie.runtime} min</p>
              <p><strong>Language:</strong> {movie.original_language}</p>
            </div>
            </div>

            <div className={styles.studio}>
            {movie.production_companies && movie.production_companies.length > 0 && (
            <div>
              <div className={styles.productionCompanies}>
                {movie.production_companies.map((company) => (
                  <div key={company.id} className={styles.companyItem}>
                    {company.logo_path && (
                      <img 
                        src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`} 
                        alt={company.name} 
                        className={styles.companyLogo} 
                      />
                    )}
                    <p>{company.name}</p>
                  </div>
                ))}
              </div>
            </div>
            
            )}
            </div>
            
         
        </div>
      )}

    <Reviews movieId={movieId} />
    <Recommendations movieId={movieId} />

    </div>

    
  );
};

export default MovieDetails;
