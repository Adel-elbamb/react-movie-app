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
      <nav className={`navbar navbar-expand-lg text-center ${styles.navbar}`}>
        <div className="container">
          <Link className="navbar-brand fw-bold ms-4" to={"/"}>
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
          <div
            className={`collapse navbar-collapse ${styles.collapse}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item mx-1">
                <NavLink className="nav-link fw-semibold " to="/movies" end>
                  Movies
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link fw-semibold " to="/tv" end>
                  TV Shows
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-heart me-1 fs-5"></i> Wishlist
                </a>
                <ul className="dropdown-menu">
                  <NavLink
                    className="nav-link fw-semibold"
                    to="/movies/wishlist"
                    end
                  >
                    <span>
                      Movies
                      <sup className="ms-1 bg-light py-1 px-2 rounded-2">
                        {MoviesWishlist.length}
                      </sup>
                    </span>
                  </NavLink>
                  <NavLink
                    className="nav-link fw-semibold"
                    to="/tv/wishlist"
                    end
                  >
                    <span>
                      TV Shows
                      <sup className="ms-1 bg-light py-1 px-2 rounded-2">
                        {ShowsWishlist.length}
                      </sup>
                    </span>
                  </NavLink>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
