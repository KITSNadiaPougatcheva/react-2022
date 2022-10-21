import PropTypes from "prop-types";
import React from "react";

export interface MovieCardProps {
  img: string | undefined; 
  title: string;
  description?: string
}

function MovieCard(props: MovieCardProps) {
  // throw new Error('My Test Error') // uncomment for testing puspose
  return (
    <div>
      <img src={props.img} alt={props.title} />
      <h3 className="movie--title">{props.title}</h3>
      <p className="movie--description">{props.description}</p>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default MovieCard;
