export const dataReducer = (dataState, { type, payload }) => {
  switch (type) {
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
    default:
      break;
  }
  return dataState;
};
