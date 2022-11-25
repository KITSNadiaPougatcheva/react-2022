import React from "react";
import { Header, MovieDetailsHeader } from "../Header";
import { Navigation } from "../Navigation";
import { SortBy } from "../SortBy";

export const WholeHeader = function () {
  return (
    <>
      <Header />
      <MovieDetailsHeader />
      <Navigation>
        <SortBy />
      </Navigation>
    </>
  );
};
