import React, { useState } from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import Genre from "../genre/Genre"; // Import the Genre component
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import './grid.css'

const Grid = ({ movies }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const navigate = useNavigate();

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genres.includes(selectedGenre));

  const reviews = (movieId) => {
    navigate(`/Reviews/${movieId}`);
    window.scrollTo(0, 0);
  };

  if (!movies) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={80} />
      </Box>
    );
  }

  return (
    <div>
      <Genre handleGenreSelect={setSelectedGenre} />
      <div className="movie-container">
        {filteredMovies.map((movie) => (
          <div
            className="movie-card"
            key={movie.imdbid}
            onClick={() => reviews(movie.imdbId)}
          >
            <ImageContainer
              src={movie.poster}
              alt={movie.title}
              description={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;