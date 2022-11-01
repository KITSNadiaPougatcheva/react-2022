import { default as React } from "react";

export const AppMovieDetailsContext = React.createContext({
  show: true,
  details: {
    img: undefined,
    title: undefined,
    description: undefined,
    short_description: undefined,
    key: undefined,
    range: undefined,
    genre: undefined,
    year: undefined
  }
});
export const AppHideMovieDetailsContext = React.createContext({
  show: (movie: any) => console.log(movie),
  hide: () => {}
});
