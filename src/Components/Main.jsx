import React from "react";
import Wrapper from "./Wrapper";
import { popularMovies } from "../Utils/data";
import MovieCard from "./MovieCard";
const Main = () => {
  return (
    <main>
      <div className="movieSlider">
        <p style={{ textAlign: "center" }}>Movie Slider goes here</p>
      </div>
      <Wrapper>
        <h2 className="sectionTitle">Popular Movies</h2>
        <div className="gallery">
          {popularMovies.map(movie => {
            return <MovieCard key={movie.id} movie = {movie}/>
          })}
        </div>
      </Wrapper>
    </main>
  );
};

export default Main;
