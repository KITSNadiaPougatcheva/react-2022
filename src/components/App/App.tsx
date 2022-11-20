import React from "react";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import store from "../../store";
import "../../styles/style.css";
import { Footer } from "../footer-components";
import { MovieGallery } from "../gallery-components";
import {
  Header,
  MovieDetailsHeader,
  Navigation,
  SortBy
} from "../header-components";
import { NotFound } from "./NotFound";

export function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <MovieDetailsHeader />

        <Navigation>
          <SortBy />
        </Navigation>

        <main>
          {/* <MovieGallery /> */}
          <Routes>
            <Route path="/search" element={<MovieGallery />}></Route>
            <Route path="/" element={<Navigate to="/search" replace />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </Provider>
    </>
  );
}
