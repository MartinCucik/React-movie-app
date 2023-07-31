import "./App.css";
import Navbar from "./Components/Navbar.js";
import React from "react";
import Movieinfo from "./Components/Movieinfo";
import Carousel from "./Components/Carousel";
import Menu from "./Components/Menu";
import Pagination from "./Components/Pagination";
import { animated, useSpring } from "@react-spring/web";
import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore, deleteDoc } from "firebase/firestore";
/*
In this app ,i ve choosen user scenario of movie database with live search functionality like on netflix. ITs created with React, React BOOtstrap,custom components and HOOKS with props sharing.
On every search or change of input of searchbar, api request is called and view is changed based on functionality of that call. Relevant information from api call is displayed and styled.   

Martin Cucik
*/
function App() {
  const [favorite, setFavorite] = React.useState([]);
  const [favid, setFavid] = React.useState([]);

  const [movies, setMovies] = React.useState([]);
  const [searchValue, SetSearchValue] = React.useState("");
  const [selectedMovie, selectMovie] = React.useState();
  const [selectedGenre, updateSelectedGenre] = React.useState("s");
  const [movieID, setMovieId] = React.useState();
  const [content, setContent] = React.useState(
    "https://api.themoviedb.org/3/trending/all/week?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page="
  );
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
      fretch(
        `https://api.themoviedb.org/3/search/movie?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&query=${searchValue}&page=`,
        page
      );
      setContent(
        `https://api.themoviedb.org/3/search/movie?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&query=${searchValue}&page=`
      );
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

  const getData = async () => {
    const docs = await db.collection("users").get();
    docs.forEach((doc) => {
      console.log(doc.data().id);
      setFavid((array) => [...array, doc.data().id]);
      fetch(
        `https://api.themoviedb.org/3/movie/${
          doc.data().id
        }?api_key=895828b8903ed3292aba730835d1e40e&language`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setFavorite((array) => [...array, data]);
        });
    });
  };
  React.useEffect(() => {
    getData();
  }, []);

  const writeData = async (param) => {
    const citiesRef = collection(db, "users");
    console.log(param);
    await setDoc(doc(citiesRef, param.toString()), {
      id: param,
    });
    setFavid((array) => [...array, param]);
    fetch(
      `https://api.themoviedb.org/3/movie/${param}?api_key=895828b8903ed3292aba730835d1e40e&language`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setFavorite((array) => [...array, data]);
      });
  };
  const deleteData = async (param) => {
    const citiesRef = collection(db, "users");
    await deleteDoc(doc(citiesRef, param.toString()));
    setFavid((prevArray) => prevArray.filter((item) => item !== param));
    setFavorite((prevFavorite) =>
      prevFavorite.filter((movie) => movie.id !== param)
    );

    console.log("vymazane? Param je :" + param);
    console.log(favorite);
  };
  return (
    <div>
      <Navbar searchValue={searchValue} SetSearchValue={SetSearchValue} />

      <Menu
        page={page}
        setPage={setPage}
        fretch={fretch}
        content={content}
        setContent={setContent}
        setMovies={setMovies}
      />

      <div className="container1">
        <div className="movie mx-auto">
          {movies && movies.length > 4
            ? movies.map((movieReq) => (
                <Movieinfo
                  setFavorite={setFavorite}
                  favid={favid}
                  favorite={favorite}
                  key={movieReq.id}
                  {...movieReq}
                  selectMovie={selectMovie}
                  updateSelectedGenre={updateSelectedGenre}
                  writeData={writeData}
                  deleteData={deleteData}
                />
              ))
            : null}
          {favorite && !movies
            ? favorite.map((fav) => (
                <Movieinfo
                  favorite={favorite}
                  key={fav.id}
                  {...fav}
                  selectMovie={selectMovie}
                  updateSelectedGenre={updateSelectedGenre}
                  setFavorite={setFavorite}
                  favid={favid}
                  favorite={favorite}
                  writeData={writeData}
                  deleteData={deleteData}
                />
              ))
            : null}
          {favorite.length < 1 && movies.length < 1 && (
            <div className="text-center text-7xl">hehe</div>
          )}
          {/*<Movieinfo
            {...movies}
            selectMovie={selectMovie}
            updateSelectedGenre={updateSelectedGenre}
          />
            */}{" "}
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
