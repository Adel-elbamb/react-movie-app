import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import MoviesWishlist from "./pages/MoviesWishlist";
import TVshowswishlist from "./pages/TVshowswishlist";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/movies/wishlist" element={<MoviesWishlist/>}></Route>
        <Route path="/tv/wishlist" element={<TVshowswishlist/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
