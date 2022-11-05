import React, { useContext } from "react";
import { AppHideMovieDetailsContext } from "../../context";
import { DeleteMovie } from "./DeleteMovie";
import { EditMovie } from "./EditMovie";
import { MovieCardInterface } from "./MovieCardInterface";

export function MovieCard(props: MovieCardInterface) {
  const toggleMovieDetails = useContext(AppHideMovieDetailsContext);

  const { details } = props;
  return (
    <div className="movie-card-content">
      <img
        src={details.img}
        alt={details.title}
        onClick={() => toggleMovieDetails.show(details)}
      />
      <h3 className="movie--title">{details.title}</h3>
      <p className="movie--rating">Rating : {details.range}</p>
      <p className="movie--description">{details.short_description}</p>
      <EditMovie />
      <DeleteMovie />
    </div>
  );
}
