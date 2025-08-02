import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, onRefer, onBook }) => (
  <div className="movie-list-grid">
    {movies.length > 0 ? (
      movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onRefer={onRefer}
          onBook={onBook}
        />
      ))
    ) : (
      <p className="empty-list-msg">No movies found.</p>
    )}
  </div>
);

export default MovieList;
