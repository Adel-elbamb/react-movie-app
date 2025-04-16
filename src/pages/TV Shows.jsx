import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axiosInstance from "../apis/config";
import { useDispatch, useSelector } from "react-redux";
import { toggleTVFromWatch } from "../store/slices/TVWatchList";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
// import Form from "react-bootstrap/Form";
// import { FaSearch } from "react-icons/fa";

export default function TVShows() {
  const [tvShows, setTVShows] = useState([]);
  const tvWatchList = useSelector((state) => state.tvShowsList);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`/tv/popular`, {
        params: {
          page,
        },
      })
      .then((res) => {
        setTVShows(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const handleStoreList = (id) => {
    dispatch(toggleTVFromWatch(id));
  };

  const handleViewDetails = (id) => {
    navigate(`/tvShowDetails/${id}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <h1>TV Shows</h1>
      <form
        onSubmit={handleSearch}
        className="d-flex w-75 m-auto my-5"
        role="search"
      >
        <input
          className="form-control me-2 rounded-5"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie ..."
          aria-label="Search"
        />
        <button className="btn btn-warning rounded-5 " onClick={handleSearch}>
          Search
        </button>
      </form>
      {/* <Form onSubmit={handleSearch} className="search-form">
        <div className="search-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie ..."
            className="search-input"
          />
          <FaSearch className="search-icon" onClick={handleSearch} />
        </div>
      </Form> */}
      <Row xs={1} md={4} lg={5} className="g-4">
        {tvShows.map((show, idx) => (
          <Col key={idx}>
            <Card className="shadow h-100">
              <Card.Img
                variant="top"
                src={`${import.meta.env.VITE_TMDB_IMG_URL}${show.poster_path}`}
              />
              <Card.Body>
                <Card.Title
                  className="fs-6 fw-bold"
                  onClick={() => handleViewDetails(show.id)}
                >
                  <a>{show.name}</a>
                </Card.Title>
                <Card.Text className="text-muted">
                  {show.first_air_date}
                  <i
                    className={`bi d-flex ${
                      tvWatchList.includes(show.id)
                        ? "bi-heart-fill"
                        : "bi-heart"
                    } text-warning d-inline-block`}
                    onClick={() => handleStoreList(show.id)}
                  ></i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Container>
          <ul className="pagination m-auto my-5">
            <li className="page-item">
              <a
                className="page-link"
                onClick={() =>
                  page > 1 ? setPage((prev) => prev - 1) : setPage(1)
                }
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={() => setPage(1)}>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={() => setPage(2)}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={() => setPage(3)}>
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => setPage((prev) => prev + 1)}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </Container>
      </Row>
    </>
  );
}
