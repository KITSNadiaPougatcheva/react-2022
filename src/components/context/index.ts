import { default as React } from "react";

export const AppContext = React.createContext({
    showMovieDetails: true,
    theme: "dark",
    toggleTheme: () => {},
  });