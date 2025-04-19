# CineScope – Movie & TV Browser App

A modern and interactive web app built with React that allows users to explore the latest movies and TV shows, view detailed information, read reviews, search, and manage a personal wishlist.

## Live Demo

[https://react-movie-app-trial.vercel.app/](https://react-movie-app-trial.vercel.app/)

## GitHub Repository

[https://github.com/Adel-elbamb/react-movie-app](https://github.com/Adel-elbamb/react-movie-app)

---

## Project Overview

This project uses The Movie Database (TMDB) API to fetch and display dynamic content for:

- Movies now playing
- TV shows
- Movie & show details
- Reviews
- Recommendations
- Search results
- Wishlist management

---

## Pages

- Home Page – Displays now playing movies
- Movie Details – Info, reviews, and recommendations
- TV Shows Page – Lists popular TV shows
- TV Show Details
- Wishlist Page – Saved movies and TV shows
- Search Results Page
- 404 Page – For undefined routes

---

## Key Features

### Browse & Search

- View movies using:  
  `https://api.themoviedb.org/3/movie/now_playing?api_key={apiKey}`

- Search movies by keyword:  
  `https://api.themoviedb.org/3/search/movie?api_key={apiKey}&query={MovieName}`

- Paginate through results using `&page={page}`

### Movie Details

- View movie info using:  
  `https://api.themoviedb.org/3/movie/{id}?api_key={apiKey}`

- See recommended movies  
- Read reviews:  
  `https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key={apiKey}`

### Wishlist

- Add/remove movies & TV shows to wishlist
- Counter updates in navbar
- Wishlist stored using `localStorage`
- Toggle wishlist icon directly from movie/show card

### TV Shows

- View popular TV shows using:  
  `https://api.themoviedb.org/3/tv/popular?api_key={apiKey}`

- Show TV show details:  
  `https://api.themoviedb.org/3/tv/{series_id}?api_key={apiKey}`

### Language Support

- Switch between: `en`, `ar`, `fr`, `zh`
- Change content language using TMDB's `language` query param
- Set direction to RTL when Arabic is selected

---

## Technologies Used

- React.js  
- Redux Toolkit  
- React Router  
- Axios (with interceptors)  
- TMDB API  
- CSS / Responsive Layout  
- LocalStorage  
- Figma for UI Reference

---

## Requirements Covered

- Reusable components  
- Component communication  
- State management using Redux  
- API calls and interceptors  
- Error handling (404 route)  
- Responsive UI  
- GitHub with proper commit history  
- Deployment using Vercel  
- Feature/time tracking spreadsheet

---

## Feature Sheet

Track the implementation time and status using the Google Sheet below:

[Feature & Time Sheet](https://docs.google.com/spreadsheets/d/1NRvrJ8pSKXGn2Y4JCvZKdcJJBlVlGqiewtQYZrlkH2U/edit?usp=sharing)

---

## Submission Instructions

Send the final project sheet to: `marinashafiq89@gmail.com`  
Subject line: `ITI [branch] | React | Movie App`

---

## License

This project is for educational/demo purposes. Check TMDB API usage terms for more info.

---


