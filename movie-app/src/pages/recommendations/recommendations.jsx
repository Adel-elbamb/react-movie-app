import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './Recommendations.module.css';

const Recommendations = ({ movieId }) => {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=e0dd7fb1ec73d693e8c236644b38dc1f`)
      .then(res => setRecommended(res.data.results))
      .catch(err => console.error('error', err));
  }, [movieId]);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Recommendations</h2>
      <Row>
        {recommended.slice(0, 6).map(movie => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={2} className="mb-4">
            <Card className={`${styles.movieCard} shadow-sm`}>
              <div className={styles.posterWrapper}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.cardImg}
                />
                <div className={styles.ratingCircle}>
                  <CircularProgressbar
                    value={movie.vote_average * 10}
                    text={`${Math.round(movie.vote_average * 10)}%`}
                    styles={buildStyles({
                      textSize: '30px',
                      textColor: '#fff',
                      pathColor: '#21d07a',
                      trailColor: '#204529',
                    })}
                  />
                </div>
              </div>
              <Card.Body>
                <Card.Title className="fs-6">{movie.title}</Card.Title>
                <Card.Text className="text-muted">
                  {new Date(movie.release_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Recommendations;
