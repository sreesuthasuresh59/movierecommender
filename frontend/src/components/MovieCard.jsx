import React from 'react';
import '../styles/MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-overlay">
          <div className="movie-rating">
            <span className="star">⭐</span>
            <span>{movie.rating}</span>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        <p className="movie-genre">{movie.genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;