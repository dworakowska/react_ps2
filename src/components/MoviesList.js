import React from "react";
import PostMovie from "./PostMovie";

function MoviesList(props) {
  let movies = props.movies;
  return movies.map(movie => (
    <PostMovie
      key={movie.id}
      title={movie.title}
      poster={movie.poster}
      rating={movie.rating}
      genre={movie.genre}
      description={movie.description}
    />
  ));
}

export default MoviesList;
