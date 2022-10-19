import React from "react";

import MovieCard from "./MovieCard";

import { default as movies } from "./movies";
function MovieList() {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          description={movie.description}
          img={movie.img}
          key={movie.id}
        />
      ))}
    </>
  );
}

export default MovieList;
