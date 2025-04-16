import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";

const TVShows = lazy(() => import("./pages/TV Shows"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tv" element={<TVShows />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
