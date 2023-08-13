import React from "react";
import "./MovieCard.css";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie_card">
      <NavLink to={`/movieDetail/${movie.id}`} className="movide_detail_link">
        <div>
          <img src={movie.imageURL} alt={movie.title} className="movie_img" />
        </div>
        <h3>{movie.title}</h3>
        <div className="info">
          <p>{movie.summary}</p>
        </div>
      </NavLink>
      <div className="action_btns">
        <button className="btn">Star</button>
        <button className="btn">Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MovieCard;
