// components/nowPlaying/NowPlaying.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../components/MovieCard/MovieCard";
import Pagination from "../../components/Pagination/Pagination";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=e0dd7fb1ec73d693e8c236644b38dc1f&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) =>
        console.error("Error fetching now playing movies", error)
      );
  }, [page]);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Now Playing</h2>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={2} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default NowPlaying;
