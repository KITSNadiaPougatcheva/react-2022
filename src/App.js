import React from "react";

import Footer from "./Footer";
import MovieGallery from "./MovieGallery";
import Navigation from "./Navigation";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <MovieGallery showList/>
        </main>
        <Footer/>
      </>
    );
  }
}

export default App;
