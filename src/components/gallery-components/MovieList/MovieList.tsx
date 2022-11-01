import React from "react";
import { default as movies } from "../../../data/movies";
import { MovieCard } from "../MovieCard";

export function MovieList() {
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
