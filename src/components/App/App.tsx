import React from "react";
import "../../styles/style.css";
import { Footer } from "../footer-components";
import { MovieGallery } from "../gallery-components";
import { Header, Navigation, SortBy } from "../header-components";

export class App extends React.Component {
  state = {
    sorting: "none"
  }

  sortBy = () => {
    this.setState({sorting: this.state.sorting === "Rating" ? "Alphabet" : "Rating" });
    console.log("Sorting...");
  }

  render() {
    return (
      <>
        <Header/>
        <Navigation>
          <SortBy onSelect={this.sortBy}/>
        </Navigation>
        <main>
          <MovieGallery showList sortBy={this.state.sorting}/>
        </main>
        <Footer/>
      </>
    );
  }
}
