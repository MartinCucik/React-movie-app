import React from "react";

function Menu({ popular, upcoming, bestranked, setPage }) {
  return (
    <>
      <div>
        <ul className="text-2xl  flex flex-row  lg:flex-row list-none lg:ml-auto justify-center bg-red-400">
          <li
            className="nav-item px-2 py-2 cursor-pointer bg-red-400 hover:bg-red-700 md:px-6"
            onClick={() => {
              popular(1);
              setPage(1);
            }}
          >
            Popular
          </li>
          <li
            className="nav-item  px-2 py-2 cursor-pointer bg-red-400 hover:bg-red-700 md:px-6"
            onClick={upcoming}
          >
            Upcoming
          </li>
          <li
            className="nav-item px-2 py-2 cursor-pointer bg-red-400 hover:bg-red-700 md:px-6"
            onClick={bestranked}
          >
            Best ranked
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
