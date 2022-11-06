import React from "react";
import { Provider } from "react-redux";
import "../../styles/style.css";
import { Footer } from "../footer-components";
import { MovieGallery } from "../gallery-components";
import { Header, Navigation, SortBy } from "../header-components";

import store from "../../store";

export function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        {/* <MovieDetailsHeader/> */}
        <Navigation>
          <SortBy />
        </Navigation>

        <main>
          <MovieGallery />
        </main>
        <Footer />
      </Provider>
    </>
  );
}
