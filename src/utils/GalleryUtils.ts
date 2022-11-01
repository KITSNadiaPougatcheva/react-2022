import { MovieCardInterface } from "../components/gallery-components/MovieCard";
import movies from "../data/movies";

export class GalleryUtils {
  static getMovieList(): MovieCardInterface[] {
    return movies.map(item => ({
      title: item.title,
      img: item.img,
      key: item.id,
      range: item.range
    }));
  }

  static sortMovieList(
    movieList: MovieCardInterface[],
    sortBy: string
  ): MovieCardInterface[] {
    return [...movieList].sort((a1, a2) => {
      if (sortBy === "Rating") {
        return a2.range - a1.range;
      }
      return a1.title.localeCompare(a2.title);
    });
  }
}
