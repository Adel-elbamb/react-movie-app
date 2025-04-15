import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "primereact/rating";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../store/slices/WishlistSlice";

export default function TVshows() {
  const Wishlist = useSelector((state) =>
    state.wishlist.value.filter((item) => item.type == "show")
  );
  const [TVshows, SetTVshows] = useState([]);
  const dispatch = useDispatch();

  const BASE_URL =
    "https://api.themoviedb.org/3/tv/popular?api_key=e0dd7fb1ec73d693e8c236644b38dc1f";

  useEffect(() => {
    const response = axios
      .get(`${BASE_URL}`)
      .then((response) => {
        console.log(response.data.results);
        SetTVshows(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [Expanded, SetExpanded] = useState(false);
  
    const changeExpanded = (_id) => {
      SetExpanded((prevExpanded) => (prevExpanded == _id ? null : _id));
    };

  return (
    <>
      <div className="row m-4 justify-content-center align-items-baseline">
        {TVshows.map((show) => {
          return (
            <div key={show.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="shadow card position-relative">
                <button
                  className="btn btn-transparent position-absolute"
                  onClick={() =>
                    dispatch(addToWishlist({ ...show, type: "show" }))
                  }
                  style={{ left: "20px", top: "15px" }}
                >
                  {Wishlist.find((item) => item.id == show.id) ? (
                    <i
                      className="fa-solid fa-heart fs-5 text-warning"
                      onClick={() => alert("TV Show already in wishlist")}
                    ></i>
                  ) : (
                    <i
                      onClick={() =>
                        dispatch(addToWishlist({ ...show, type: "show" }))
                      }
                      className="fa-regular fa-heart fs-5 text-warning"
                    ></i>
                  )}
                </button>
                <img
                  src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                  className="card-img-top"
                  alt="TV Show Image"
                />
                <h5 className="card-title px-3 pt-3 m-0">{show.name}</h5>
                <p className="text-muted card-body pt-2 pb-0 m-0">
                  {Expanded == show.id ? show.overview : `${show.overview.split(" ").slice(0,15).join(" ")}...`}
                  <button className="btn btn-warning m-2" onClick={()=> changeExpanded(show.id)}></button>
                </p>
                <span className="p-2">
                  <Rating
                    value={Math.round(show.vote_average/2)}
                    className="d-inline-block p-2"
                    cancel={false}
                  />
                  {show.vote_average}
                </span>
                <p className="text-muted text-end fst-italic card-footer m-0">
                  {show.first_air_date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
