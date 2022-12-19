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
      <nav className="navbar navbar-light bg-dark justify-content-md-between justify-content-center">
        <a className="navbar-brand" href="#">
          <img
            src={logo2}
            width="120"
            height="120"
            class="d-inline-block align-top"
            alt=""
          ></img>
        </a>

        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            value={props.value}
            onChange={(event) => setDebouncedTerm(event.target.value)}
            placeholder="Search movie"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
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
