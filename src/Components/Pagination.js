import { render } from "@testing-library/react";
import React from "react";

function Pagination({ fretch, page, setPage, recent, content }) {
  const pageNumbers = [];

  for (let i = 1; i <= 20; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="pagination-container text-center ">
        <ul className="pagination">
          <button
            onClick={() => {
              setPage(page + 1);
              fretch(content, page);
            }}
          >
            Next
          </button>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => fretch(content, number)}
              className="page-number mr-1 text-lg cursor-pointer"
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
