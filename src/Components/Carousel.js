import React from "react";
import "./Carousel.css";
export default function Carousel(movies) {
  return (
    <div>
      <>
        <div className="wrapper">
          <section id="section1">
            <a href="#section3" className="arrow__btn">
              ‹
            </a>
            {movies.movies.slice(0, 5).map((item) => {
              return (
                <div className="item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt="Describe Image"
                  />
                </div>
              );
            })}

            <a href="#section2" className="arrow__btn">
              ›
            </a>
          </section>
          <section id="section2">
            <a href="#section1" className="arrow__btn">
              ‹
            </a>
            {movies.movies.slice(5, 10).map((item) => {
              return (
                <div className="item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt="Describe Image"
                  />
                </div>
              );
            })}
            <a href="#section3" className="arrow__btn">
              ›
            </a>
          </section>
          <section id="section3">
            <a href="#section2" className="arrow__btn">
              ‹
            </a>
            {movies.movies.slice(10, 15).map((item) => {
              return (
                <div className="item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt="Describe Image"
                  />
                </div>
              );
            })}

            <a href="#section1" className="arrow__btn">
              ›
            </a>
          </section>
        </div>
      </>
    </div>
  );
}
