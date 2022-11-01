import React from "react";
import "../../styles/style.css";
import { Footer } from "../footer-components";
import { MovieGallery } from "../gallery-components";
import { Navigation } from "../header-components";

export class App extends React.Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <MovieGallery/>
        </main>
        <Footer/>
      </>
    );
  }
}
