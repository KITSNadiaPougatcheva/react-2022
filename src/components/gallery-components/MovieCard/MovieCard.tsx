import PropTypes from "prop-types";
import React from "react";
import { DeleteMovie } from "./DeleteMovie";
import { EditMovie } from "./EditMovie";
import { MovieCardInterface } from "./MovieCardInterface";
export function MovieCard(props: MovieCardInterface) {
  // throw new Error('My Test Error') // uncomment for testing puspose
  return (
    <div>
      <img src={props.img} alt={props.title}/>
      <h3 className="movie--title">{props.title}</h3>
      <p className="movie--description">{props.description}</p>
      <EditMovie/>
      <DeleteMovie/>
    </div> 
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired
};
