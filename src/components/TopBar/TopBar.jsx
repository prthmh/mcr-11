import React, { useState } from "react";
import "./TopBar.css";
import { useData } from "../../context/DataContext";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  // const [input, setInput] = useState("");
  const { dataDispatch } = useData();

  const handleSearch = (e) => {
    dataDispatch({ type: "SEARCH_CHANGE", payload: e.target.value });
  };

  return (
    <div className="topbar">
      <div className="title">IMDB</div>
      <div className="search">
        <input type="text" placeholder="Search Movie" onChange={handleSearch} />
      </div>
      <div className="page_nav">
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
        <div>Starred</div>
      </div>
    </div>
  );
};

export default TopBar;
