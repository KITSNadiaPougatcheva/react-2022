import { MovieCardInterface } from "../components/gallery-components/MovieCard";
import movies from "../data/movies";

export class GalleryUtils {
  static getMovieList(): MovieCardInterface[] {
    return movies.map(item => ({ title: item.title, img: item.img, key: item.id}))
  }
}
