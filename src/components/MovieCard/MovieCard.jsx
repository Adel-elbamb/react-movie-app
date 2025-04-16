import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addToWishlist, removeFromWishlist } from '../../store/actions'
import styles from './MovieCard.module.css';

// Hardcode API constant
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ item, itemType }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const isInWishlist = wishlist.some((w) => w.id === item.id && w.itemType === itemType);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(item.id, itemType));
    } else {
      dispatch(addToWishlist({ ...item, itemType }));
    }
  };

  const title = itemType === 'movie' ? item.title : item.name;
  const path = itemType === 'movie' ? `/movie/${item.id}` : `/tv/${item.id}`;
  const releaseDate = itemType === 'movie' ? item.release_date : item.first_air_date;

  return (
    <div className={`card border-0 ${styles.movieCard}`}>
      <Link to={path}>
        <img
          src={`${TMDB_IMAGE_BASE_URL}/${item.poster_path}`}
          alt={title}
          className={`card-img-top ${styles.poster}`}
        />
      </Link>
      <div className="card-body p-0 mt-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className={`badge rounded-pill ${styles.rating}`}>
            {item.vote_average.toFixed(1)}
          </span>
          <button onClick={toggleWishlist} className={styles.wishlistBtn}>
            {isInWishlist ? '❤️' : '🤍'}
          </button>
        </div>
        <Link to={path} className={styles.titleLink}>
          <h6 className={`card-title mt-2 ${styles.title}`}>{title}</h6>
        </Link>
        <p className={`card-text ${styles.releaseDate}`}>
          {new Date(releaseDate).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;