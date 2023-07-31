import React from "react";

import logo2 from "../Images/logo2.jpg";
import "./Navbar.css";
const Navbar = (props) => {
  const [debouncedTerm, setDebouncedTerm] = React.useState("");
  React.useEffect(() => {
    const timer = setTimeout(() => props.SetSearchValue(debouncedTerm), 750);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);
  return (
    <div>
      <nav className="w-full px-10 bg-stone-700 shadow flex flex-col md:flex-row  items-center justify-between">
        <a className="flex my-2" href="#">
          <img
            src={logo2}
            width="120"
            height="120"
            class="d-inline-block align-top"
            alt=""
          ></img>
        </a>

        <form className="flex flex-row text-lg md:text-xl items-center border-t-emerald-500">
          <input
            className="px-2 py-2"
            value={props.value}
            onChange={(event) => setDebouncedTerm(event.target.value)}
            placeholder="Search movie"
            aria-label="Search"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 py-2 px-4 flex"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
