import { default as React, useState } from "react";
import "../../styles/style.css";
import { AppContext } from "../context";
import { Footer } from "../footer-components";
import { MovieGallery } from "../gallery-components";
import {
    Header, MovieDetailsHeader, Navigation,
    SortBy
} from "../header-components";


export function App() {
  const [movieQuery, setMovieQuery] = useState("");
  const [sorting, sortBy] = useState("none");


  const [detailHeaderState, setDetailsHeaderState] = useState({
    showMovieDetails: true,
    theme: "black",
    toggleTheme: () => { 
        console.log(detailHeaderState); 
        () => setDetailsHeaderState({ ...detailHeaderState, showMovieDetails: !detailHeaderState.showMovieDetails })}
  })
//   const detailHeaderState={
//     showMovieDetails: false,
//     theme: "light",
//     toggleTheme: () => { console.log(detailHeaderState)}
//   }

  return (
    <>
    <AppContext.Provider value={detailHeaderState}>
      <Header findMovie={setMovieQuery} />
      <MovieDetailsHeader findMovie={setMovieQuery} />
      <Navigation>
        <SortBy sortBy={sortBy} />
      </Navigation>

      <main>
        <MovieGallery sortBy={sorting} movieQuery={movieQuery} />
      </main>
      <Footer />
      </AppContext.Provider>
    </>
  );
}
