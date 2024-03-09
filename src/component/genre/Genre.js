import React from 'react';
import { Button } from 'react-bootstrap';
import './genre.css'

const Genre = ({ handleGenreSelect }) => {
  const genres = [
    'All',
    'Fantasy',
    'Family',
    'Comedy',
    'Action',
    'Drama',
    'History',
    'Adventure',
    'Science Fiction',
    'Animation',
    'Horror',
    'Thriller'
  ];

  return (
    <div style={{display:'flex', paddingLeft:'50px', flexWrap: 'wrap', gap:'16px'}}>
      {genres.map((genre) => (
        <div key={genre} style={{paddingTop:'20px'}}>
          <Button variant="primary" className='genre-button' onClick={() => handleGenreSelect(genre)}>{genre}</Button>
        </div>
      ))}
    </div>
  );
};

export default Genre;
