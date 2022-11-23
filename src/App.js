import "react-bootstrap";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import React from "react";
import Movieinfo from "./Components/Movieinfo";
import Carousel from "react-bootstrap/Carousel";
import Menu from "./Components/Menu";
import Moviedetails from "./Components/Moviedetails";
/*
In this app ,i ve choosen user scenario of movie database with live search functionality like on netflix. ITs created with React, React BOOtstrap,custom components and HOOKS with props sharing.
On every search or change of input of searchbar, api request is called and view is changed based on functionality of that call. Relevant information from api call is displayed and styled.   

Martin Cucik
*/
function App() {
  const [movies, setMovies] = React.useState([]);
  const [searchValue, SetSearchValue] = React.useState();
  const [selectedMovie, selectMovie] = React.useState();
  const trendingurl =
    "https://api.themoviedb.org/3/trending/all/week?api_key=895828b8903ed3292aba730835d1e40e";
  const topratedurl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=1";
  const upcomingurl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=1";
  function recent() {
    fetch(trendingurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }
  function newest() {
    fetch(upcomingurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }
  function bestranked() {
    fetch(topratedurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }
  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&query=${searchValue}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [searchValue]);
  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=895828b8903ed3292aba730835d1e40e"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <Navbar searchValue={searchValue} SetSearchValue={SetSearchValue} />
      <Menu bestranked={bestranked} newest={newest} recent={recent} />
      <div className="container1">
        <div className="movie">
          {movies.map((movieReq) => (
            <Movieinfo
              key={movieReq.id}
              {...movieReq}
              selectMovie={selectMovie}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
