const charactersData = function() {
  // export default () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json",
  )
    .then(response => response.json())
    .then(data => data.results);
};

export default charactersData;
