import React from "react";
import Rating from "./Rating";

function PostMovie(props) {
  return (
    <div>
      <h1> {props.title} </h1>
      <img width="100" src={props.poster} />
      <p>
        <span>Ocena uzytkownikow:</span>
        <Rating value={props.rating} />
      </p>
      <p>
        <span>Twoja ocena:</span>
        <Rating
          value={10}
          onClick={value =>
            alert(`Dziękujemy za oddanie głosu. Twoja ocena: ${value}`)
          }
        />
      </p>
      <h3>Gatunek: {props.genre}</h3>
      <p> {props.description} </p>
    </div>
  );
}

export default PostMovie;
