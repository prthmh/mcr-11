import React from "react";
import "./LandingPage.css";
import Filters from "../../components/Filters/Filters";
import { useData } from "../../context/DataContext";

const LandingPage = () => {
  const {
    dataState: { allMovies },
    getSortedList,
  } = useData();
  const output = getSortedList(allMovies);
  return (
    <div>
      <Filters />
      {output.length > 0 ? (
        <div className="landing_page_list">
          {output?.map((movie) => (
            <div className="movie" key={movie.id}>
              {movie.title}------{movie.year}-----{movie.rating}-----
              {movie.genre}
            </div>
          ))}
        </div>
      ) : (
        <h2>No Movies kindly select another filter.</h2>
      )}
    </div>
  );
};

export default LandingPage;
