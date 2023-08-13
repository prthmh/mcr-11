export const getYearList = (data) => {
  const list = data.reduce(
    (acc, curr) => (acc.includes(curr.year) ? acc : [...acc, curr.year]),
    []
  );
  return list;
};
