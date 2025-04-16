import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";

const TVShows = lazy(() => import("./pages/TV Shows"));
const MoviesList = lazy(() => import("./pages/MoviesList"));
const TVshowsWishList = lazy(() => import("./pages/TVshowsWishList"));
const TVShowDetails = lazy(() => import("./pages/TVShowDetails"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const PageLayout = lazy(() => import("./components/PageLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MoviesList />} />
          <Route path="/tv" element={<TVShows />} />
          <Route path="/tvShowDetails/:id" element={<TVShowDetails />} />
          <Route path="/tvShowsWishList" element={<TVshowsWishList />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
