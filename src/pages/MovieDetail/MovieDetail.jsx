import React from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";

const MovieDetail = () => {
  const { movieId } = useParams();
  const {
    dataState: { allMovies },
  } = useData();
  const findMovie = allMovies.find((movie) => movie.id === Number(movieId));
  console.log(findMovie.genre);
  return (
    <div>
      <div className="movie_detail">
        <div>
          <img
            src={findMovie?.imageURL}
            alt={findMovie?.title}
            className="single_img"
          />
        </div>
        <div className="single_movie_info">
          <h1>{findMovie?.title}</h1>
          <p>{findMovie?.summary}</p>
          <p>Year: {findMovie?.year}</p>
          <p>Genre: {findMovie?.genre.toString()}</p>
          <p>Rating: {findMovie?.rating}</p>
          <p>Director: {findMovie?.director}</p>
          <p>Writer: {findMovie?.writer}</p>
          <p>Cast: {findMovie?.cast.toString()}</p>
          <div className="action_btns">
            <button className="btn">Star</button>
            <button className="btn">Add to Watchlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
