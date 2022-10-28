import React from "react";
import { default as movies } from "../../../data/movies";
import { GalleryUtils } from "../../../utils/GalleryUtils";
import { MovieCard } from "../MovieCard";

export class MovieList extends React.Component {
  constructor(public readonly props: any) { super(props); }

  state = {
    movies: GalleryUtils.getMovieList()
  }

  componentDidMount() {
    this.setState({ movies })
  }

  render() {
    return (
      <>
        {GalleryUtils.sortMovieList(this.state.movies, this.props.sortBy).map((movie) => 
          (<MovieCard title={movie.title} description={movie.description} img={movie.img} key={movie.key} range={movie.range}/>))}
      </>
    );
  }
}
