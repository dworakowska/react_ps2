import React from "react";
import star from "../star.svg";

function Rating(props) {
  const stars = Array.from(Array(props.value)).map((val, i) => (
    <img key={i} src={star} onClick={() => props.onClick(i + 1)} />
  ));
  return <span>{stars}</span>;
}

// function Rating(props) {
//   return (
//     <span>
//       {props.value}
//       <img src={star} />
//     </span>
//   );
// }

export default Rating;
