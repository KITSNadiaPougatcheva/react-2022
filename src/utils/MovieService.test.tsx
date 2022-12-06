import fetchMock from "jest-fetch-mock";
import { MovieService } from "./MovieService";

fetchMock.enableMocks();

describe("MovieService", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("findMoviesAsync", async () => {
    const MOVIE_LIST = [
      {
        id: "12345",
        title: "Test Movie",
        poster_path: "http://test.com/test-img.jpg",
        vote_average: 5,
        release_date: "2005/11/02"
      }
    ];
    fetchMock.mockResponseOnce(JSON.stringify({ data: MOVIE_LIST }));

    const res = await MovieService.findMoviesAsync({
      sortBy: "date",
      query: "the",
      genre: "drama"
    });

    expect(res).toEqual(MOVIE_LIST);
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:4000/movies?filter=drama&search=the&searchBy=title&sortBy=date&sortOrder=desc"
    );
  });

  test("addMovieAsync", async () => {
    const NEW_MOVIE = {
      title: "Test Movie",
      poster_path: "http://test.com/test-img.jpg",
      vote_average: 5,
      release_date: "2005/11/02"
    };

    fetchMock.mockResponseOnce(JSON.stringify({ ...NEW_MOVIE, id: "12345" }));

    const res = await MovieService.addMovieAsync(NEW_MOVIE);

    expect(res).toEqual({ ...NEW_MOVIE, id: "12345" });
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:4000/movies", {
      body: '{"title":"Test Movie","poster_path":"http://test.com/test-img.jpg","vote_average":5,"release_date":"2005/11/02"}',
      headers: { "Content-Type": "application/json;charset=utf-8" },
      method: "POST"
    });
  });

  test("deleteMovieAsync", async () => {

    fetchMock.mockResponseOnce(JSON.stringify({ ok: true }));

    const res = await MovieService.deleteMovieAsync("12345");

    expect(res).toEqual(undefined);
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:4000/movies/12345", {
      headers: { "Content-Type": "application/json;charset=utf-8" },
      method: "DELETE"
    });
  });
});
