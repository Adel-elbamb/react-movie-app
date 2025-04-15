import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import MoviesWishlist from "./pages/MoviesWishlist";
import TVshowswishlist from "./pages/TVshowswishlist";
import Movies from "./pages/Movies";
import TVshows from "./pages/TVshows";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* e0dd7fb1ec73d693e8c236644b38dc1f */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tv" element={< TVshows/>}></Route>
        <Route path="/movies/wishlist" element={<MoviesWishlist/>}></Route>
        <Route path="/tv/wishlist" element={<TVshowswishlist/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
