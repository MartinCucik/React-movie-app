import React from "react";
import "react-bootstrap";
import "./Navbar.css";
import logo2 from "../Images/logo2.jpg";

const Navbar = (props) => {
  const [debouncedTerm, setDebouncedTerm] = React.useState("");
  React.useEffect(() => {
    const timer = setTimeout(() => props.SetSearchValue(debouncedTerm), 750);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src={logo2}
            width="120"
            height="120"
            class="d-inline-block align-top"
            alt=""
          ></img>
        </a>

        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            value={props.value}
            onChange={(event) => setDebouncedTerm(event.target.value)}
            placeholder="Search movie"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;