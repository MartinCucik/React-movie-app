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
        <ul className="pagination py-2">
          <button
            onClick={() => {
              setPage(page + 1);
              fretch(content, page + 1);
            }}
          >
            Previous
          </button>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => {
                setPage(number);
                fretch(content, number);
              }}
              className={`page-number text-lg cursor-pointer px-1 hover:scale-150 ${
                page === number ? "underline decoration-sky-400 text-2xl" : ""
              }`}
            >
              {number}
            </li>
          ))}
          <button
            onClick={() => {
              setPage(page + 1);
              fretch(content, page);
            }}
          >
            Next>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
