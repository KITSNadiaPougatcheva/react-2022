import React, { useCallback, useState } from "react";
import { DeleteMovie } from "./DeleteMovie";
import { EditMovie } from "./EditMovie";
import { MovieCardInterface } from "./MovieCardInterface";
//import { MovieDetails } from "./MovieDetails";

export function MovieCard(props: MovieCardInterface) {
  // throw new Error('My Test Error') // uncomment for testing puspose
  const [state, setState] = useState(false);
  const callbackOpenDetails = useCallback(() => setState(true), []);
  const callbackHideDetails = useCallback(() => setState(false), []);

  const { details } = props;
  return (
    <div className="movie-card-content">
      <img
        src={details.img}
        alt={details.title}
        onClick={callbackOpenDetails}
      />
      {/* <MovieDetails
        isOpen={state}
        hideDetails={callbackHideDetails}
        details={details}
      /> */}
      <h3 className="movie--title">{details.title}</h3>
      <p className="movie--rating">Rating : {details.range}</p>
      <p className="movie--description">{details.short_description}</p>
      <EditMovie />
      <DeleteMovie />
    </div>
  );
}
