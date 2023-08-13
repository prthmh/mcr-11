import React, { useState } from "react";
import "./NewMoviePage.css";
import { useData } from "../../context/DataContext";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const NewMoviePage = () => {
  const {
    dataState: { allMovies },
    dataDispatch,
  } = useData();
  const [formData, setFormData] = useState({
    id: allMovies.length + 1,
    title: "",
    year: 0,
    genre: [],
    rating: 0,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    if (e.target.name === "genre" || e.target.name === "cast") {
      const value = e.target.value.split(",");
      console.log(value);
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataDispatch({ type: "ADD_MOVIE", payload: formData });
    toast("New Movie Added! Go to Movies page to view", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="new_page" >
      <ToastContainer />
      <h2>Add a new Movie</h2>
      <form className="new_movie_form" onSubmit={handleSubmit}>
        <label className="form_label"></label>
        <label className="form_label">
          Title
          <input
            type="text"
            className="form_input"
            name="title"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Year
          <input
            type="number"
            className="form_input"
            name="year"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Genre(split genre cast by ",")
          <input
            type="text"
            className="form_input"
            name="genre"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Rating
          <input
            type="number"
            className="form_input"
            name="rating"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Director
          <input
            type="text"
            className="form_input"
            name="director"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Writer
          <input
            type="text"
            className="form_input"
            name="writer"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Cast(split different cast by ",")
          <input
            type="text"
            className="form_input"
            name="cast"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Summary
          <textarea
            className="form_input"
            name="summary"
            onChange={handleChange}
          ></textarea>
        </label>
        <label className="form_label">
          Image URL
          <input
            type="text"
            className="form_input"
            name="imageURL"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="movie_add_btn">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default NewMoviePage;
