import React from "react";
import { connect } from "react-redux";
import { MovieCard } from "../MovieCard";

function BasicMovieList(props: any) {
  const { movies } = props;
  console.log("Rendering... ", "movies = ", movies);
  return (
    <>
      {movies &&
        movies.map((movie: any) => (
          <MovieCard details={movie} key={movie.id} />
        ))}
    </>
  );
}

const mapStateToProps = ({ movies }: { movies: any[] }) => ({ movies });

export const MovieList = connect(mapStateToProps)(BasicMovieList);
