import { MovieServiceConfig } from "./MovieServiceConfig";

export class MovieService {
  static async getMoviesAsync(): Promise<any> {
    const url = `${MovieServiceConfig.BASE_PATH}${MovieServiceConfig.MOVIES_PATH}`;
    console.log("getMoviesAsync : url = ", url);
    return fetch(url)
      .then(result => result.json())
      .then(res => (res && res.data) || [])
      .catch(error => {
        console.error(error);
        return [];
      });
  }

  static async findMoviesAsync({
    sortBy,
    query,
    genre
  }: {
    sortBy?: string;
    query?: string;
    genre?: string;
  }): Promise<any[]> {
    const filter =
      genre && genre !== "All"
        ? `${MovieServiceConfig.FILTER_PARAM}${genre}`
        : "";
    const searchBy = query
      ? `&${MovieServiceConfig.SEARCH_PARAM}${query}&searchBy=title`
      : "";
    const sort = sortBy
      ? `&${MovieServiceConfig.SORT_PARAM}${sortBy}&sortOrder=desc`
      : "";
    const url = `${MovieServiceConfig.BASE_PATH}${
      MovieServiceConfig.MOVIES_PATH
    }?${[filter, searchBy, sort].join("")}`;
    console.log("findMoviesAsync : url = ", url);
    return fetch(url)
      .then(result => result.json())
      .then(res => {
        const results = (res && res.data) || [];
        console.log("Fetch results : ", results);
        return results;
      })
      .catch(error => {
        console.error(error);
        return [];
      });
  }
}
