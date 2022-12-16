const trendingurl =
  "https://api.themoviedb.org/3/trending/all/week?api_key=895828b8903ed3292aba730835d1e40e";
const topratedurl =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=1";
const upcomingurl =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=1";

export function recent() {
  fetch(trendingurl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.results;
    });
}
export function newest() {
  fetch(upcomingurl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.results;
    });
}
export function bestranked() {
  fetch(topratedurl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.results;
    });
}
