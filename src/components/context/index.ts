import { default as React } from "react";

export const AppMovieDetailsContext = React.createContext(false);
export const AppHideMovieDetailsContext = React.createContext({show: (_movie: any) => {}, hide: () => {}});