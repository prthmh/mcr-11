export const getGenreList = (data) => {
  const list = data.reduce((acc, curr) => {
    curr.genre.forEach((currGenre) => {
      if (!acc.includes(currGenre)) {
        acc.push(currGenre);
      }
    });
    return acc;
  }, []);
  return list;
};
