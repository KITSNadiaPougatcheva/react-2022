import React from "react";

import Header from "./Header";
import MovieGallery from "./MovieGallery";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <MovieGallery showList="true" />
        </main>
      </div>
    );
  }
}

export default App;
