import React, { useState } from "react";
import { Provider } from "react-redux";
import "../../styles/style.css";
import { Footer } from "../footer-components";
import { MovieGallery } from "../gallery-components";
import { Header, Navigation, SortBy } from "../header-components";

import store from "../../store";

export function App() {
  const [movieQuery, setMovieQuery] = useState("");
  const [sorting, sortBy] = useState("none");

  // const [showMovieDetails, setShowMovieDetails] = useState(false);
  // const [selectedMovie, setSelectedMovie] = useState({});

  return (
    <>
      <Provider store={store}>
        <Header findMovie={setMovieQuery} />
        {/* <MovieDetailsHeader/> */}
        <Navigation>
          <SortBy sortBy={sortBy} />
        </Navigation>

        <main>
          <MovieGallery sortBy={sorting} movieQuery={movieQuery} />
        </main>
        <Footer />
      </Provider>
    </>
  );
}
