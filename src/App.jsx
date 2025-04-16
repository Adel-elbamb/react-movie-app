import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";

const TVShows = lazy(() => import("./pages/TV Shows"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const PageLayout = lazy(() => import("./components/PageLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/tv" element={<TVShows />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
