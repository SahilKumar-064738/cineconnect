import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onRefer, onBook }) => (
  <div
    className="movie-card-img"
    style={{ backgroundImage: `url(${movie.image})` }}
    tabIndex={0}
  >
    <div className="movie-card-overlay">
      <div className="movie-card-content">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-desc">{movie.description}</p>
        <button
          className="booknow-btn"
          onClick={() => onBook(movie)}
          aria-label={`Book ${movie.title}`}
        >
          Book Now
        </button>
      </div>
      <button
        className="refer-btn"
        onClick={() => onRefer(movie)}
        aria-label={`Refer ${movie.title}`}
      >
        Refer
      </button>
      {movie.isReferred && (
        <span className="badge-referred">Referred</span>
      )}
    </div>
  </div>
);

export default MovieCard;
