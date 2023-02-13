import React from "react";

export default function Paginate({ recent }) {
  const pageNumbers = [];

  for (let i = 1; i <= 20; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {" "}
      <div className="pagination-container text-center ">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => recent(number)}
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
