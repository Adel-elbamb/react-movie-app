import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import styles from './TvShowsDetails.module.css';

import TVShowReviews from '../TvShowsReviews/TvShowReviews'; // أو المسار الصحيح حسب مكان الملف


const TVShowDetails = () => {
  const { id } = useParams(); 
  const [tvShow, setTvShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=e0dd7fb1ec73d693e8c236644b38dc1f&language=en-US`)
      .then(response => setTvShow(response.data))
      .catch(error => console.error("Error fetching TV show details:", error));
  }, [id]);

  return (
    <div className={styles.container}>
      {tvShow && (
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
              alt={tvShow.name}
            />
          </div>
          <div className={styles.details}>
            <h1 className={styles.title}>{tvShow.name}</h1>
            <p className={styles.date}>
              First Air Date: {new Date(tvShow.first_air_date).toLocaleDateString()}
            </p>
            <div className={styles.rating}>
              <Rating value={tvShow.vote_average / 2} readOnly cancel={false} />
            </div>
            <p className={styles.overview}>{tvShow.overview}</p>
            <div className={styles.genres}>
              {tvShow.genres.map((genre) => (
                <span key={genre.id} className={styles.genre}>{genre.name}</span>
              ))}
            </div>
            <p className={styles.language}><strong>Language:</strong> {tvShow.original_language}</p>
            <p className={styles.seasons}><strong>Seasons:</strong> {tvShow.number_of_seasons}</p>
            
             
              <div className={styles.production}>
              <strong>Production Companies:</strong>
              <div className={styles.productionList}>
                {tvShow.production_companies.map(company => (
                  <div key={company.id} className={styles.company}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                     alt={company.name}
                    />
                   
                  </div>
                ))}
              </div>
            </div>
          </div>


            

        </div>
      )}

      <TVShowReviews />

    </div>
  );
};

export default TVShowDetails;
