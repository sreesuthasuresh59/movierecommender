import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import MovieGrid from './components/MovieGrid';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [searchedMovie, setSearchedMovie] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [allMovies, setAllMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSearchMode, setIsSearchMode] = useState(false);

  const loadInitialMovies = async () => {
    setLoading(true);
    try {
      // Replace this with your actual backend endpoint to fetch all movies
      // const response = await fetch('YOUR_BACKEND_URL/movies');
      // const data = await response.json();
      // setAllMovies(data.movies);
      
      // Mock data for initial movie list
      setTimeout(() => {
        const mockMovies = [
          {
            id: 1,
            title: 'The Shawshank Redemption',
            year: 1994,
            rating: 9.3,
            genre: 'Drama',
            poster: 'https://via.placeholder.com/300x450/2c5f7e/ffffff?text=Shawshank'
          },
          {
            id: 2,
            title: 'The Godfather',
            year: 1972,
            rating: 9.2,
            genre: 'Crime, Drama',
            poster: 'https://via.placeholder.com/300x450/8b4513/ffffff?text=Godfather'
          },
          {
            id: 3,
            title: 'The Dark Knight',
            year: 2008,
            rating: 9.0,
            genre: 'Action, Crime',
            poster: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Dark+Knight'
          },
          {
            id: 4,
            title: 'Pulp Fiction',
            year: 1994,
            rating: 8.9,
            genre: 'Crime, Drama',
            poster: 'https://via.placeholder.com/300x450/d4a76a/000000?text=Pulp+Fiction'
          },
          {
            id: 5,
            title: 'Forrest Gump',
            year: 1994,
            rating: 8.8,
            genre: 'Drama, Romance',
            poster: 'https://via.placeholder.com/300x450/87ceeb/ffffff?text=Forrest+Gump'
          },
          {
            id: 6,
            title: 'Inception',
            year: 2010,
            rating: 8.8,
            genre: 'Sci-Fi, Thriller',
            poster: 'https://via.placeholder.com/300x450/4a5568/ffffff?text=Inception'
          },
          {
            id: 7,
            title: 'The Matrix',
            year: 1999,
            rating: 8.7,
            genre: 'Sci-Fi, Action',
            poster: 'https://via.placeholder.com/300x450/00ff00/000000?text=Matrix'
          },
          {
            id: 8,
            title: 'Goodfellas',
            year: 1990,
            rating: 8.7,
            genre: 'Crime, Drama',
            poster: 'https://via.placeholder.com/300x450/8b0000/ffffff?text=Goodfellas'
          },
          {
            id: 9,
            title: 'The Silence of the Lambs',
            year: 1991,
            rating: 8.6,
            genre: 'Horror, Thriller',
            poster: 'https://via.placeholder.com/300x450/4b0082/ffffff?text=Silence'
          },
          {
            id: 10,
            title: 'Interstellar',
            year: 2014,
            rating: 8.6,
            genre: 'Sci-Fi, Drama',
            poster: 'https://via.placeholder.com/300x450/191970/ffffff?text=Interstellar'
          },
          {
            id: 11,
            title: 'Spirited Away',
            year: 2001,
            rating: 8.6,
            genre: 'Animation, Fantasy',
            poster: 'https://via.placeholder.com/300x450/ff69b4/ffffff?text=Spirited+Away'
          },
          {
            id: 12,
            title: 'The Lion King',
            year: 1994,
            rating: 8.5,
            genre: 'Animation, Drama',
            poster: 'https://via.placeholder.com/300x450/ffa500/000000?text=Lion+King'
          },
          {
            id: 13,
            title: 'Saving Private Ryan',
            year: 1998,
            rating: 8.6,
            genre: 'Action, Drama',
            poster: 'https://via.placeholder.com/300x450/556b2f/ffffff?text=Private+Ryan'
          },
          {
            id: 14,
            title: 'The Prestige',
            year: 2006,
            rating: 8.5,
            genre: 'Drama, Mystery',
            poster: 'https://via.placeholder.com/300x450/2f4f4f/ffffff?text=Prestige'
          },
          {
            id: 15,
            title: 'The Departed',
            year: 2006,
            rating: 8.5,
            genre: 'Crime, Thriller',
            poster: 'https://via.placeholder.com/300x450/8b4513/ffffff?text=Departed'
          },
          {
            id: 16,
            title: 'Gladiator',
            year: 2000,
            rating: 8.5,
            genre: 'Action, Drama',
            poster: 'https://via.placeholder.com/300x450/b8860b/ffffff?text=Gladiator'
          },
          {
            id: 17,
            title: 'The Hangover',
            year: 2009,
            rating: 7.7,
            genre: 'Comedy',
            poster: 'https://via.placeholder.com/300x450/ff6347/ffffff?text=Hangover'
          },
          {
            id: 18,
            title: 'Superbad',
            year: 2007,
            rating: 7.6,
            genre: 'Comedy',
            poster: 'https://via.placeholder.com/300x450/ff4500/ffffff?text=Superbad'
          },
          {
            id: 19,
            title: 'The Notebook',
            year: 2004,
            rating: 7.8,
            genre: 'Romance, Drama',
            poster: 'https://via.placeholder.com/300x450/ffb6c1/ffffff?text=Notebook'
          },
          {
            id: 20,
            title: 'Titanic',
            year: 1997,
            rating: 7.9,
            genre: 'Romance, Drama',
            poster: 'https://via.placeholder.com/300x450/4682b4/ffffff?text=Titanic'
          },
          {
            id: 21,
            title: 'The Conjuring',
            year: 2013,
            rating: 7.5,
            genre: 'Horror, Mystery',
            poster: 'https://via.placeholder.com/300x450/000000/ffffff?text=Conjuring'
          },
          {
            id: 22,
            title: 'Get Out',
            year: 2017,
            rating: 7.7,
            genre: 'Horror, Mystery',
            poster: 'https://via.placeholder.com/300x450/8b0000/ffffff?text=Get+Out'
          },
          {
            id: 23,
            title: 'Lord of the Rings',
            year: 2001,
            rating: 8.8,
            genre: 'Adventure, Fantasy',
            poster: 'https://via.placeholder.com/300x450/228b22/ffffff?text=LOTR'
          },
          {
            id: 24,
            title: 'Harry Potter',
            year: 2001,
            rating: 7.6,
            genre: 'Adventure, Fantasy',
            poster: 'https://via.placeholder.com/300x450/4b0082/ffffff?text=Harry+Potter'
          }
        ];
        setAllMovies(mockMovies);
        setLoading(false);
      }, 1000);
      
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Failed to load movies. Please try again.');
      setLoading(false);
    }
  };

  // Load initial movies when component mounts
  useEffect(() => {
    loadInitialMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    // Filter movies based on selected genre
    const moviesToFilter = isSearchMode ? recommendations : allMovies;
    
    if (selectedGenre === 'all') {
      setFilteredMovies(moviesToFilter);
    } else {
      const filtered = moviesToFilter.filter(movie => 
        movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenre, allMovies, recommendations, isSearchMode]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = async (movieName) => {
    setSearchLoading(true);
    setError('');
    setSearchedMovie(movieName);
    setSelectedGenre('all');
    setIsSearchMode(true);
    
    try {
      // Replace this URL with your actual backend endpoint
      // const response = await fetch(`YOUR_BACKEND_URL/recommend?movie=${encodeURIComponent(movieName)}`);
      // const data = await response.json();
      // setRecommendations(data.recommendations);
      
      // Mock data for demonstration
      setTimeout(() => {
        const mockRecommendations = [
          {
            id: 101,
            title: 'Inception',
            year: 2010,
            rating: 8.8,
            genre: 'Sci-Fi, Thriller',
            poster: 'https://via.placeholder.com/300x450/4a5568/ffffff?text=Inception'
          },
          {
            id: 102,
            title: 'Interstellar',
            year: 2014,
            rating: 8.6,
            genre: 'Sci-Fi, Drama',
            poster: 'https://via.placeholder.com/300x450/191970/ffffff?text=Interstellar'
          },
          {
            id: 103,
            title: 'The Matrix',
            year: 1999,
            rating: 8.7,
            genre: 'Sci-Fi, Action',
            poster: 'https://via.placeholder.com/300x450/00ff00/000000?text=Matrix'
          },
          {
            id: 104,
            title: 'Shutter Island',
            year: 2010,
            rating: 8.2,
            genre: 'Mystery, Thriller',
            poster: 'https://via.placeholder.com/300x450/2f4f4f/ffffff?text=Shutter+Island'
          },
          {
            id: 105,
            title: 'The Prestige',
            year: 2006,
            rating: 8.5,
            genre: 'Drama, Mystery',
            poster: 'https://via.placeholder.com/300x450/2f4f4f/ffffff?text=Prestige'
          },
          {
            id: 106,
            title: 'Memento',
            year: 2000,
            rating: 8.4,
            genre: 'Mystery, Thriller',
            poster: 'https://via.placeholder.com/300x450/696969/ffffff?text=Memento'
          }
        ];
        setRecommendations(mockRecommendations);
        setSearchLoading(false);
      }, 1500);
      
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Failed to fetch recommendations. Please try again.');
      setSearchLoading(false);
    }
  };

  const handleBackToBrowse = () => {
    setIsSearchMode(false);
    setSearchedMovie('');
    setSelectedGenre('all');
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Discover Your Next Favorite Movie</h1>
          <p className="hero-subtitle">
            {isSearchMode 
              ? 'Here are movies similar to your selection' 
              : 'Browse popular movies or search for recommendations'}
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {(loading || searchLoading) && <LoadingSpinner />}
        
        {error && <div className="error-message">{error}</div>}
        
        {!loading && !searchLoading && (
          <>
            {isSearchMode && (
              <div className="back-button-container">
                <button className="back-button" onClick={handleBackToBrowse}>
                  <span className="back-icon">←</span>
                  <span>Back to Browse All Movies</span>
                </button>
              </div>
            )}
            
            <div className="results-section">
              <h2 className="results-title">
                {isSearchMode 
                  ? <>Because you liked <span className="searched-movie">"{searchedMovie}"</span></>
                  : 'Popular Movies'}
              </h2>
              
              <FilterBar selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
              
              {filteredMovies.length > 0 ? (
                <MovieGrid movies={filteredMovies} />
              ) : (
                <div className="no-results">
                  <p>No movies found in this genre. Try selecting a different filter!</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Movie Recommendations. Powered by ML.</p>
      </footer>
    </div>
  );
}

export default App;