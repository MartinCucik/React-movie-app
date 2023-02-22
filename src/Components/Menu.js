import React from "react";

function Menu({ fretch, upcoming, bestranked, setPage, content, setContent }) {
  const trendingurl = `https://api.themoviedb.org/3/trending/all/week?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=`;
  const topratedurl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=";
  const upcomingurl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=";

  return (
    <>
      <div>
        <ul className="text-2xl  flex flex-row  lg:flex-row list-none lg:ml-auto justify-center bg-red-400">
          <li
            className="nav-item px-2 py-2 cursor-pointer bg-red-400 hover:bg-red-700 md:px-6"
            onClick={() => {
              fretch(trendingurl, 1);
              setPage(1);
              setContent(trendingurl);
            }}
          >
            Popular
          </li>
          <li
            className="nav-item  px-2 py-2 cursor-pointer bg-red-400 hover:bg-red-700 md:px-6"
            onClick={() => {
              fretch(upcomingurl, 1);
              setContent(upcomingurl);
              setPage(1);
            }}
          >
            Upcoming
          </li>
          <li
            className="nav-item px-2 py-2 cursor-pointer bg-red-400 hover:bg-red-700 md:px-6"
            onClick={() => {
              fretch(topratedurl, 1);
              setContent(topratedurl);
              setPage(1);
            }}
          >
            Best ranked
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
