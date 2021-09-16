import React, { useState, useEffect } from "react";
import "./App.css";

import Movies from "./components/Movies";

const FEATURE_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=5ebfa3940b3f74f62ad3723ee4b4f288&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=5ebfa3940b3f74f62ad3723ee4b4f288&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURE_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((data) => data.json())
      .then((resp) => {
        setMovies(resp.results);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <header>
          <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleChange}
          />
        </header>
      </form>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movies {...movie} key={movie.id} />)}
      </div>
    </>
  );
}

export default App;
