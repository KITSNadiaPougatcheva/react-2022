import { MovieCardInterface } from "../components/gallery-components/MovieCard";
import movies from "../data/movies";

export class GalleryUtils {
  static getMovieList(): MovieCardInterface[] {
    return movies.map(item => ({
      details: {
        title: item.title,
        img: item.img,
        key: item.id,
        range: item.range,
        description: item.description,
        short_description: item.short_description,
        genre: item.genre,
        year: item.year
      },
      key: item.id
    }));
  }

  static sortMovieList(
    movieList: MovieCardInterface[],
    sortBy: string
  ): MovieCardInterface[] {
    return [...movieList].sort((a1, a2): number => {
      if (sortBy === "Rating") {
        return a2.details.range - a1.details.range;
      }
      return a1.details.title.localeCompare(a2.details.title);
    });
  }
}
