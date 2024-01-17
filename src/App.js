import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Update the import statement to match the correct casing
import Header from './compo/header/header';
import Home from './pages/homeless/homeless';
import MovieList from './compo/movieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;