export const dataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case "SET_STATE":
      dataState = payload;
      break;
    case "GENRE_CHANGE":
      dataState = {
        ...dataState,
        filters: { ...dataState.filters, sortType: "genre", genre: payload },
      };
      break;
    case "YEAR_CHANGE":
      dataState = {
        ...dataState,
        filters: { ...dataState.filters, sortType: "year", year: payload },
      };
      break;
    case "RATING_CHANGE":
      dataState = {
        ...dataState,
        filters: { ...dataState.filters, sortType: "rating", rating: payload },
      };
      break;
    case "SEARCH_CHANGE":
      dataState = {
        ...dataState,
        filters: { ...dataState.filters, sortType: "search", search: payload },
      };
      break;
    case "ADD_TO_WATCHLIST":
      dataState = {
        ...dataState,
        watchlist: [...dataState.watchlist, payload],
      };
      break;
    case "ADD_MOVIE":
      dataState = {
        ...dataState,
        allMovies: [...dataState.allMovies, payload],
      };
      break;
    default:
      break;
  }

  localStorage.setItem("mcr11", JSON.stringify(dataState));
  return dataState;
};
