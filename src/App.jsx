import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";
import HeaderLayout from "./components/HeaderLayout";

const MoviesWishlist = lazy(() => import("./pages/MoviesWishlist"));
const TVshowswishlist = lazy(() => import("./pages/TVshowsWishlist"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/movies/wishlist" element={<MoviesWishlist />}></Route>
          <Route path="/tv/wishlist" element={<TVshowswishlist />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
