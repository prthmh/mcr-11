import React from "react";
import "./Filters.css";
import { useData } from "../../context/DataContext";
import { getGenreList } from "../../utils/getGenreList";
import { getYearList } from "../../utils/getYearList";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const {
    dataState: { allMovies },
    dataDispatch,
  } = useData();
  const navigate = useNavigate();
  const genreList = getGenreList(allMovies);
  const yearList = getYearList(allMovies);
  const ratingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleGenreChange = (e) => {
    dataDispatch({ type: "GENRE_CHANGE", payload: e.target.value });
  };
  const handleYearChange = (e) => {
    dataDispatch({ type: "YEAR_CHANGE", payload: +e.target.value });
  };
  const handleRatingChange = (e) => {
    dataDispatch({ type: "RATING_CHANGE", payload: +e.target.value });
  };

  return (
    <div className="filters">
      <h3>Movies</h3>
      <select onChange={handleGenreChange}>
        <option>Select Genre</option>
        {genreList?.map((genre, i) => (
          <option key={i} value={genre}>
            {genre}
          </option>
        ))}
        <option value="all">All</option>
      </select>
      <select onChange={handleYearChange}>
        <option>Select Year</option>
        {yearList?.map((year, i) => (
          <option key={i} value={year}>
            {year}
          </option>
        ))}
        <option value="all">All</option>
      </select>
      <select onChange={handleRatingChange}>
        <option>Select Rating</option>
        {ratingList?.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
        <option value="all">All</option>
      </select>
      <button onClick={() => navigate("/addNewMovie")} className="add_btn" >Add Movie</button>
    </div>
  );
};

export default Filters;
