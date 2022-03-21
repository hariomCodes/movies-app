import { movies } from "./getMovies";
import React, { Component } from "react";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      pArray: [1],
    };
  }
  render() {
    const moviesArr = movies.results;
    return (
      <>
        <div className="movie-list">
          {moviesArr.map((movie) => {
            return movie === "" ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div
                className="card movie-card"
                onMouseEnter={() => {
                  this.setState({ hover: movie.id });
                }}
                onMouseLeave={() => {
                  this.setState({ hover: "" });
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="card-img-top movie-img"
                  alt={`movie.title`}
                />

                <h5 className="card-title movie-title">{movie.title}</h5>
                {this.state.hover === movie.id && (
                  <button className="btn btn-primary movie-button">
                    Add to Favourite
                  </button>
                )}
              </div>
            );
          })}
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
                </li>
              {this.state.pArray.map((el)=> (
              <li className="page-item">
                <a className="page-link" href="#">
                  {el}
                </a>
              </li>))}
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
