import React, { useEffect, useState } from "react";
import { GalleryUtils } from "../../../utils/GalleryUtils";
import { MovieCard } from "../MovieCard";

export function MovieList(props: any) {
  const [movies, setMovies] = useState(GalleryUtils.getMovieList());

  useEffect(() => {
    console.log("Use effect...");
    const filteresList = GalleryUtils.sortMovieList(
      GalleryUtils.getMovieList(),
      props.sortBy
    ).filter(movie => {
      return (
        !props.movieQuery ||
        movie.details.title
          .toLowerCase()
          .includes(props.movieQuery.toLowerCase())
      );
    });
    setMovies(filteresList);
  }, [props.sortBy, props.movieQuery]);
  console.log("Rendering... by sorting", props.sortBy);
  return (
    <>
      {movies.map(movie => (
        <MovieCard details={movie.details} key={movie.details.key} />
      ))}
    </>
  );
}
