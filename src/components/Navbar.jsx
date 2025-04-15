import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";

export default function Navbar() {
  const MoviesWishlist = useSelector((state) =>
      state.wishlist.value.filter((item) => item.type == "movie")
    );
  const ShowsWishlist = useSelector((state) =>
      state.wishlist.value.filter((item) => item.type == "show")
    );

  return (
    <>
      {/* "navbar navbar-expand-lg fixed-top" */}
      <nav className={`navbar navbar-expand-lg text-center ${styles.navbar}`}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold ms-4" to={'/'}>
            Movie App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${styles.collapse}`} id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item mx-1">
                <NavLink className="nav-link fw-semibold " to={'/movies'}>
                    Movies
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link fw-semibold " to={'/tv'}>
                    TV Shows
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link fw-semibold " to={'/movies/wishlist'}>
                  <i className="fa-solid fa-heart me-1 fs-5"></i>
                  <span>
                    Movies Wishlist
                    <sup className="ms-1 bg-light py-1 px-2 rounded-2">{MoviesWishlist.length}</sup>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link fw-semibold " to={'/tv/wishlist'}>
                  <i className="fa-solid fa-heart me-1 fs-5"></i>
                  <span>
                    TV Shows Wishlist
                    <sup className="ms-1 bg-light py-1 px-2 rounded-2">{ShowsWishlist.length}</sup>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
