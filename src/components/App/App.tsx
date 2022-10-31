import { default as React, useState } from "react";
import "../../styles/style.css";
import { Footer } from "../footer-components";
import { MovieGallery } from "../gallery-components";
import { Header, Navigation, SortBy } from "../header-components";

export function App() {
  const [movieQuery, setMovieQuery] = useState("");
  const [sorting, sortBy] = useState("none");

  return (
    <>
      <Header findMovie={setMovieQuery} />
      <Navigation>
        <SortBy sortBy={sortBy} />
      </Navigation>

      <main>
        <MovieGallery sortBy={sorting} movieQuery={movieQuery} />
      </main>
      <Footer />
    </>
  );
}
