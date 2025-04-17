import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchResult from "./pages/searchPage/SearchResults";

import { lazy } from "react";

const TVShows = lazy(() => import("./pages/TV Shows"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { language } = useSelector((state) => state.languages);
  const direction = language === "ar" ? "rtl" : "ltr";

  return (
    <div className={direction === "rtl" ? "rtl" : "ltr"}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/tv" element={<TVShows />} />
          <Route path="/search" element={<SearchResult/>} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;