import React, { useState } from "react";
import "./TopBar.css";
import { useData } from "../../context/DataContext";

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
        <div>Moview</div>
        <div>Watchlist</div>
        <div>Starred</div>
      </div>
    </div>
  );
};

export default TopBar;
