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

  static async addMovieAsync(movie: any) {
    const url = `${MovieServiceConfig.BASE_PATH}${MovieServiceConfig.MOVIES_PATH}`;
    console.log("Looking for movies : ", url);
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(movie)
    })
      .then(res => {
        if (!res.ok) {
          const msg = `Error ${res.status} ${res.statusText}`;
          console.error(msg);
          res.json().then(errData => console.error("ERROR", errData));
          throw new Error(msg);
        }
        return res.json();
      })
      .then(res => {
        console.log("Added", res);
        return res;
      });
  }

  static async deleteMovieAsync(id: string) {
    const url = `${MovieServiceConfig.BASE_PATH}${MovieServiceConfig.MOVIES_PATH}/${id}`;
    console.log("Looking for movies : ", url);
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(res => {
        if (!res.ok) {
          const msg = `Error ${res.status} ${res.statusText}`;
          console.error(msg);
          res.json().then(errData => console.error("ERROR", errData));
          throw new Error(msg);
        }
      })
      .then(() => console.log("Deleted", id));
  }

  static async updateMovieAsync(movie: any) {
    const url = `${MovieServiceConfig.BASE_PATH}${MovieServiceConfig.MOVIES_PATH}`;
    console.log("Updating movie for movies : PUT ", url, "body :", movie);
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(movie)
    })
      .then(res => {
        if (!res.ok) {
          const msg = `Error ${res.status} ${res.statusText}`;
          console.error(msg);
          res
            .json()
            .then(errData =>
              console.error("ERROR updating movie", errData, "payload", movie)
            );
          throw new Error(msg);
        }
        return res.json();
      })
      .then(res => {
        console.log("Updated", res);
        return res;
      });
  }
}
