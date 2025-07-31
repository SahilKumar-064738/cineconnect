import React from "react";
import MovieCard from "../../components/MovieCard";

const MovieList = ({ movies, filter, onRefer }) => {
  const filteredMovies = movies.filter((movie) => {
    if (filter === "all") return true;
    if (filter === "referred") return movie.isReferred;
    if (filter === "unreferred") return !movie.isReferred;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onRefer={onRefer} />
        ))
      ) : (
        <p className="text-gray-600">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
