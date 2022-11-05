import React from "react";
import "./Movieinfo.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSpring, animated } from "react-spring";

function Moviedetails({ selectedMovie, title }) {
  const [movieInfo, getMovieInfo] = React.useState();

  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&query=${selectedMovie}&page=1&include_adult=false`
      // "https://api.themoviedb.org/3/trending/all/week?api_key=895828b8903ed3292aba730835d1e40e"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getMovieInfo(data.results);
      });
    console.log("info22" + movieInfo);
    console.log("info33" + selectedMovie);
    console.log("info" + movieInfo);
  }, [selectedMovie]);
  return <div>{selectedMovie && <div>{selectedMovie}</div>}</div>;
}

export default Moviedetails;
