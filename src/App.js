import React from "react";
import MoviesList from "./components/MoviesList";
import movies from "./movies.json";

const topMovies = movies.filter(movie => movie.rating > 6);
const worstMovies = movies.filter(movie => movie.rating <= 6);

function Movies() {
  return (
    <div>
      <h2>TopMovies</h2>
      <MoviesList movies={topMovies} />
      <h2>WorstMovies</h2>
      <MoviesList movies={worstMovies} />
    </div>
  );
}

function MoviesByGenre(props) {
  let movies = props.movies;
  const moviesByGenre = {};

  movies.forEach(movie => {
    if (Array.isArray(moviesByGenre[movie.genre])) {
      moviesByGenre[movie.genre].push(movie);
    } else {
      moviesByGenre[movie.genre] = [movie];
    }
  });

  let keys = Object.keys(moviesByGenre);

  let elements = keys.map(element => {
    const moviesFromGenre = moviesByGenre[element];

    return (
      <span key={element}>
        <h1>{element}</h1>
        <MoviesList movies={moviesFromGenre} />
      </span>
    );
  });

  return <div>{elements}</div>;
}

export default MoviesByGenre; //Movies
