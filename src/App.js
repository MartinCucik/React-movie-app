import "./App.css";
import Navbar from "./Components/Navbar.js";
import React from "react";
import Movieinfo from "./Components/Movieinfo";
import Carousel from "./Components/Carousel";
import Menu from "./Components/Menu";
import Pagination from "./Components/Pagination";

/*
In this app ,i ve choosen user scenario of movie database with live search functionality like on netflix. ITs created with React, React BOOtstrap,custom components and HOOKS with props sharing.
On every search or change of input of searchbar, api request is called and view is changed based on functionality of that call. Relevant information from api call is displayed and styled.   

Martin Cucik
*/
function App() {
  const [movies, setMovies] = React.useState([]);
  const [searchValue, SetSearchValue] = React.useState("");
  const [selectedMovie, selectMovie] = React.useState();
  C;
  const [selectedGenre, updateSelectedGenre] = React.useState("s");
  const [movieID, setMovieId] = React.useState();
  const [content, setContent] = React.useState("trending");
  const [page, setPage] = React.useState(1);

  const similiarurl = `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=<<api_key>>&language=en-US&page=1`;
  function fretch(url, param) {
    console.log(url + param);
    fetch(url + param)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }

  React.useEffect(() => {
    console.log("fetch from genre" + selectedGenre);
    if (selectedGenre !== "s") {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=895828b8903ed3292aba730835d1e40e&with_genres=${selectedGenre}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [selectedGenre]);
  React.useEffect(() => {
    if (searchValue && searchValue.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&query=${searchValue}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [searchValue]);
  React.useEffect(() => {
    console.log("First efect");
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

      <Menu
        page={page}
        setPage={setPage}
        fretch={fretch}
        content={content}
        setContent={setContent}
      />
      <Carousel movies={movies} />
      <div className="container1">
        <div className="movie">
          {movies && movies.length > 0
            ? movies.map((movieReq) => (
                <Movieinfo
                  key={movieReq.id}
                  {...movieReq}
                  selectMovie={selectMovie}
                  updateSelectedGenre={updateSelectedGenre}
                />
              ))
            : null}
        </div>
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        fretch={fretch}
        content={content}
      />
    </div>
  );
}

export default App;
