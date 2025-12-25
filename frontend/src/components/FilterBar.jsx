import React from 'react';
import '../styles/FilterBar.css';

function FilterBar({ selectedGenre, onGenreChange }) {
  const genres = [
    { id: 'all', name: 'All' },
    { id: 'action', name: 'Action'},
    { id: 'comedy', name: 'Comedy' },
    { id: 'drama', name: 'Drama'},
    { id: 'horror', name: 'Horror' },
    { id: 'romance', name: 'Romance' },
    { id: 'sci-fi', name: 'Sci-Fi' },
    { id: 'thriller', name: 'Thriller' },
    { id: 'animation', name: 'Animation' },
    { id: 'fantasy', name: 'Fantasy' },
    { id: 'mystery', name: 'Mystery'},
    { id: 'adventure', name: 'Adventure' }
  ];

  return (
    <div className="filter-bar">
      <h3 className="filter-title">
        
        Filter by Genre
      </h3>
      <div className="filter-chips">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`filter-chip ${selectedGenre === genre.id ? 'active' : ''}`}
            onClick={() => onGenreChange(genre.id)}
          >
            <span className="chip-icon">{genre.icon}</span>
            <span className="chip-text">{genre.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;