import { createContext, useContext, useEffect, useReducer } from "react";
import { movies } from "../data";
import { dataReducer } from "../reducer";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = {
    allMovies: movies,
    filters: { sortType: "", search: "", year: "", rating: "", genre: "" },
    watchlist: [],
    starList: [],
  };

  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  const { sortType, search, year, rating, genre } = dataState.filters;

  const getSortedList = (data) => {
    let tempData = [...data];
    if (sortType === "genre") {
      if (genre !== "all") {
        tempData = [...tempData].filter((movie) => movie.genre.includes(genre));
      } else {
        tempData = [...data];
      }
    }

    if (sortType === "year") {
      if (year) {
        tempData = [...tempData].filter((movie) => movie.year === year);
      } else {
        tempData = [...data];
      }
    }

    if (sortType === "rating") {
      if (rating) {
        tempData = [...tempData].filter((movie) => movie.rating === rating);
      } else {
        tempData = [...data];
      }
    }

    if (sortType === "search") {
      if (search.length > 0) {
        tempData = [...tempData].filter(
          (movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()) ||
            movie.director.toLowerCase().includes(search.toLowerCase()) ||
            movie.cast.includes(search)
        );
      } else {
        tempData = [...data];
      }
    }
    return tempData;
  };

  const isInWatchList = (movieId) => {
    const movie = dataState.watchlist.find((item) => item.id === movieId);
    return Boolean(movie);
  };

  const addToWatchList = (movie) => {
    dataDispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };

  useEffect(() => {
    const stateInStorage = JSON.parse(localStorage.getItem("mcr11"));
    if (stateInStorage) {
      dataDispatch({ type: "SET_STATE", payload: stateInStorage });
    } else {
      dataDispatch({ type: "SET_STATE", payload: dataState });
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        getSortedList,
        isInWatchList,
        addToWatchList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
