import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './component/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';
import Reviews from './component/reviews/Reviews';
import NotFound from './component/notFound/NotFound';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await axios.get("https://localhost:44373/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout getMovieData={movies} />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovies} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
