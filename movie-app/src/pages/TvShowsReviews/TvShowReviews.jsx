import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './TvShowReviews.module.css'; 

const TVShowReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=e0dd7fb1ec73d693e8c236644b38dc1f`)
      .then(res => setReviews(res.data.results))
      .catch(err => console.error('Error fetching TV show reviews', err));
  }, [id]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reviews</h2>
      {reviews.slice(0, 3).map((review) => (
        <div key={review.id} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.avatar}>{review.author.charAt(0).toUpperCase()}</div>
            <div>
              <p className={styles.author}><strong>A review by {review.author}</strong></p>
              <p className={styles.date}>
                Written on {new Date(review.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <p>{review.content.split(" ").slice(0, 40).join(" ")}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TVShowReviews;
