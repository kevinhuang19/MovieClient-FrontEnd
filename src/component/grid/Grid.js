import React from "react";
import './grid.css'
import ImageContainer from "../ImageContainer/ImageContainer";
import { useNavigate } from "react-router-dom";

const Grid = ({ movies }) => {

  const navigate = useNavigate();

  function reviews(movieId)
  {
      navigate(`/Reviews/${movieId}`);
      window.scrollTo(0, 0);
  }

  console.log(movies);
  return (
    <div className="movie-container">
      {movies?.map((movie) => {
        return (
          <div className="movie-card" key={movie.imdbid} onClick={() => console.log(reviews(movie.imdbId))}> 
            <ImageContainer src={movie.poster} alt={movie.title} description={movie.title}/>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;