import { render } from "@testing-library/react";
import React from "react";

function Pagination({ page, setPage, recent }) {
  const handle = () => {
    recent(page + 1);
    setPage(page + 1);
    page++;
    console.log("page je " + page);
  };
  return (
    <div>
      <button onClick={handle}>heh</button>
      Pagination
    </div>
  );
}

export default Pagination;
