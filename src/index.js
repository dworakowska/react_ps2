import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MoviesByGenre from "./App";
import * as serviceWorker from "./serviceWorker";
import movies from "./movies.json";

ReactDOM.render(
  <MoviesByGenre movies={movies} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
