import { default as React, useState } from "react";
import "../../styles/style.css";
import { AppHideMovieDetailsContext, AppMovieDetailsContext } from "../context";
import { Footer } from "../footer-components";
import { MovieGallery } from "../gallery-components";
import {
    Header, MovieDetailsHeader, Navigation,
    SortBy
} from "../header-components";

export function App() {
  const [movieQuery, setMovieQuery] = useState("");
  const [sorting, sortBy] = useState("none");

  const [showMovieDetails, setShowMovieDetails] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState({})

  return (
    <>
    <AppHideMovieDetailsContext.Provider value={{show: (movie) => {setShowMovieDetails(true); setSelectedMovie(movie)}, hide: () => setShowMovieDetails(false)}}>
    <AppMovieDetailsContext.Provider value={showMovieDetails}>
      <Header findMovie={setMovieQuery} />
      <MovieDetailsHeader findMovie={setMovieQuery} />
      <Navigation>
        <SortBy sortBy={sortBy} />
      </Navigation>

      <main>
        <MovieGallery sortBy={sorting} movieQuery={movieQuery} />
      </main>
      <Footer />
      </AppMovieDetailsContext.Provider>
      </AppHideMovieDetailsContext.Provider>
    </>
  );
}
