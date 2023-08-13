import React from "react";
import { useData } from "../../context/DataContext";
import { NavLink } from "react-router-dom";
import "./WatchListPage.css";

const WatchListPage = () => {
  const {
    dataState: { watchlist },
  } = useData();
  return (
    <div>
      <h1>Watchlist</h1>
      <div>
        {watchlist.length > 0 ? (
          <div className="watchlist_movies">
            {watchlist.map((movie) => (
              <div className="watch_movie_card" key={movie.id}>
                <NavLink
                  to={`/movieDetail/${movie.id}`}
                  className="watch_detail_link"
                >
                  <div>
                    <img
                      src={movie.imageURL}
                      alt={movie.title}
                      className="watch_movie_img"
                    />
                  </div>
                  <h3>{movie.title}</h3>
                  <div className="watch_info">
                    <p>{movie.summary}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        ) : (
          <h3>No movies in watchlist</h3>
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
