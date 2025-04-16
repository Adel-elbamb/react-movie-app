import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axiosInstance from "../apis/config";
import { Badge } from "react-bootstrap";

export default function TVShowDetails() {
  const params = useParams();
  const { id } = params;
  const [tvShowDetails, settvShowDetails] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/tv/${id}`)
      .then((res) => {
        settvShowDetails(res.data);
        console.log(res.data.genres);
      })
      .catch((err) => console.log(err));
  }, [id]);
  if (!tvShowDetails) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="container row my-5">
      <div className="col-6">
        <img
          src={`${import.meta.env.VITE_TMDB_IMG_URL}${
            tvShowDetails.poster_path
          }`}
          alt={tvShowDetails.name}
          className="img-fluid rounded-5"
        />
      </div>
      <div className="col-6 mt-5">
        <h2>{tvShowDetails.name}</h2>
        <p className="fs-5 fw-lighter">{tvShowDetails.first_air_date}</p>
        <p>${tvShowDetails.overview}</p>
        <p>
          {tvShowDetails.genres.map((gener, idx) => (
            <Badge key={idx} className="bg-warning mx-2">
              {gener.name}
            </Badge>
          ))}
        </p>
      </div>
    </div>
  );
}
