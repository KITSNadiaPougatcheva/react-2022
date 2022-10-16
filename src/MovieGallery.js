import React from "react";

import img1 from "./img/Image1_.png";
import img2 from "./img/Image2_.png";
import img3 from "./img/Image3_.png";
import img4 from "./img/Image4_.png";
import img5 from "./img/Image5_.png";
import img6 from "./img/Image6_.png";
import img7 from "./img/Image7_.png";
import img8 from "./img/Image8_.png";

import MovieCard from "./MovieCard";
import "./style.css";

class MovieGallery extends React.Component {
  render() {
    return (
      <section class="portfolio" id="portfolio">
        <div class="portfolio">
          <div class="portfolio--images">
            <MovieCard title="Undoing" img={img1} />
            <MovieCard title="It" img={img2} />
            <MovieCard title="Ameli" img={img3} />
            <MovieCard title="Star Wars" img={img4} />
            <MovieCard title="Undoing" img={img5} />
            <MovieCard title="It" img={img6} />
            <MovieCard title="Ameli" img={img7} />
            <MovieCard title="Star Wars" img={img8} />
          </div>
        </div>
        SECTION !
      </section>
    );
  }
}

export default MovieGallery;
